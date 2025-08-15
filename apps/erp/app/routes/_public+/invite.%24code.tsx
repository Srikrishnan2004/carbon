import { assertIsPost, error } from "@carbon/auth";
import { Input, Submit, ValidatedForm, validator } from "@carbon/form";
import { Heading, VStack } from "@carbon/react";
import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@vercel/remix";
import { json, redirect } from "@vercel/remix";
import { useParams } from "@remix-run/react";
import { z } from "zod";

import { path } from "~/utils/path";

export const meta: MetaFunction = () => {
  return [{ title: "Accept Invite | Dreampi" }];
};

// Create a simple invite validator using existing patterns
const inviteValidator = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export async function loader({ request, params }: LoaderFunctionArgs) {
  // For now, just return the invite code
  // In a real implementation, you would validate the invite
  return json({ inviteCode: params.code });
}

export async function action({ request, params }: ActionFunctionArgs) {
  assertIsPost(request);
  const validation = await validator(inviteValidator).validate(
    await request.formData()
  );

  if (validation.error) {
    return json(error(validation.error, "Invalid form data"));
  }

  const { firstName, lastName } = validation.data;

  // For now, just redirect to login with a success message
  // In a real implementation, you would process the invite
  console.log("Invite accepted:", {
    firstName,
    lastName,
    inviteCode: params.code,
  });

  return redirect(path.to.login);
}

export default function InviteRoute() {
  const params = useParams();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="flex items-center justify-center w-40 h-40 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-3xl shadow-2xl shadow-purple-500/25 pulse-glow">
              <span className="text-7xl font-bold text-white">D</span>
            </div>
            {/* Floating particles effect */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
          </div>
        </div>

        <div className="modern-card rounded-3xl p-10 w-[420px] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <VStack spacing={4} className="items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <Heading size="h3" className="gradient-text">
                Accept Invite
              </Heading>
              <p className="text-muted-foreground tracking-tight text-center leading-relaxed">
                Complete your account setup to join Dreampi
              </p>
            </VStack>

            <ValidatedForm
              validator={inviteValidator}
              method="post"
              action={`/invite/${params.code}`}
              className="space-y-6"
            >
              <div className="w-full">
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                  className="input-modern h-14 text-lg"
                />
              </div>
              <div className="w-full">
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your last name"
                  className="input-modern h-14 text-lg"
                />
              </div>
              <div className="w-full">
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                  className="input-modern h-14 text-lg"
                />
              </div>

              <Submit
                size="lg"
                className="w-full h-14 text-lg font-semibold btn-modern bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-2xl shadow-lg shadow-purple-500/25"
                withBlocker={false}
              >
                Accept Invite
              </Submit>
            </ValidatedForm>
          </div>
        </div>

        <div className="text-sm text-center text-balance text-muted-foreground w-[420px] mt-6 leading-relaxed">
          <p>
            By accepting this invite, you agree to the{" "}
            <a
              href="https://dreampi.ms/terms"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-purple-600 transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://dreampi.ms/privacy"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-purple-600 transition-colors"
            >
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
