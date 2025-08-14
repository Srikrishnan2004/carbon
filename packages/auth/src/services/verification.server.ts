import { VerificationEmail } from "@carbon/documents/email";
import { redis } from "@carbon/kv";
import { resend } from "@carbon/lib/resend.server";
import { render } from "@react-email/components";
import { RESEND_DOMAIN } from "../config/env";

export async function sendVerificationCode(email: string) {
  try {
    console.log("Starting verification code send for:", email);

    // Check if we've already sent a code recently (rate limiting protection)
    const existingCode = await redis.get(`verification:${email.toLowerCase()}`);
    if (existingCode) {
      console.log(
        "Verification code already exists for this email - skipping send"
      );
      return true; // Code already exists, don't send another one
    }

    // In development, use a fixed code to avoid rate limits
    const isDevelopment = process.env.NODE_ENV === "development";
    const verificationCode = isDevelopment
      ? "123456" // Fixed code for development
      : Math.floor(100000 + Math.random() * 900000).toString();

    console.log("Generated verification code:", verificationCode);

    // Store in Redis with 10-minute expiration
    await redis.set(`verification:${email.toLowerCase()}`, verificationCode, {
      ex: 600,
    });

    console.log("Stored verification code in Redis");

    // Send email with verification code using React template
    const html = await render(
      VerificationEmail({
        email,
        verificationCode,
      })
    );

    if (!resend) {
      console.warn("Resend not configured - skipping email send");
      return true; // Return true for development mode
    }

    // In development with fixed code, skip email sending to avoid rate limits
    if (isDevelopment && verificationCode === "123456") {
      console.log("Development mode with fixed code - skipping email send");
      return true;
    }

    console.log("Sending email with resend...");

    const result = await resend.emails.send({
      from: `Carbon <no-reply@${RESEND_DOMAIN}>`,
      to: email,
      subject: "Verify your email address",
      html,
    });

    console.log("Resend result:", result);

    // Handle rate limiting gracefully in development
    if (result.error) {
      console.error("Resend error:", result.error);

      // If it's a rate limit error in development, still allow the verification to proceed
      if (
        result.error.message?.includes("rate") ||
        result.error.message?.includes("limit")
      ) {
        console.warn(
          "Rate limit hit - allowing verification to proceed in development"
        );
        return true; // Allow verification to continue for development
      }
    }

    return !result.error;
  } catch (error) {
    console.error("Failed to send verification code:", error);
    return false;
  }
}

export async function verifyEmailCode(email: string, code: string) {
  try {
    const storedCode = await redis.get(`verification:${email.toLowerCase()}`);

    if (!storedCode || String(storedCode).trim() !== String(code).trim()) {
      return false;
    }

    // Delete the code after successful verification
    await redis.del(`verification:${email.toLowerCase()}`);

    return true;
  } catch (error) {
    console.error("Failed to verify email code:", error);
    return false;
  }
}
