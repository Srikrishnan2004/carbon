import { SUPABASE_URL } from "@carbon/auth";
import { Button, Heading, VStack } from "@carbon/react";
import { useNavigate, useSearchParams } from "@remix-run/react";

export default function ConfirmMagicLink() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const token = params.get("token");
  if (!token) {
    navigate("/");
    return null;
  }

  const getConfirmationURL = (token: string) => {
    return `${SUPABASE_URL}/auth/v1/verify?token=${token}&type=magiclink&redirect_to=${window?.location.origin}/callback`;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
        <div className="flex items-center justify-center w-36 h-36 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-8">
          <span className="text-6xl font-bold text-white">D</span>
        </div>
        <div className="rounded-lg md:bg-card md:border md:border-border md:shadow-lg p-8 w-[380px]">
          <VStack spacing={4} className="items-center justify-center">
            <Heading size="h3">Let's build something 🚀</Heading>
            <Button
              size="lg"
              onClick={() => {
                window.location.href = getConfirmationURL(token);
              }}
            >
              Log In
            </Button>
          </VStack>
        </div>
      </div>
    </>
  );
}
