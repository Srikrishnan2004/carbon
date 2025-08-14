import { RESEND_API_KEY } from "@carbon/auth";
import { Resend } from "resend";

export const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
