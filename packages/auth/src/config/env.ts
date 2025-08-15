import { Edition, isBrowser } from "@carbon/utils";

declare global {
  interface Window {
    env: {
      CARBON_EDITION: string;
      SUPABASE_URL: string;
      SUPABASE_ANON_KEY: string;
      POSTHOG_API_HOST: string;
      POSTHOG_PROJECT_PUBLIC_KEY: string;
      VERCEL_URL: string;
      VERCEL_ENV: string;
      CLOUDFLARE_TURNSTILE_SITE_KEY: string;
    };
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CARBON_EDITION: string;
      DOMAIN: string;
      NOVU_SECRET_KEY: string;
      POSTHOG_API_HOST: string;
      POSTHOG_PROJECT_PUBLIC_KEY: string;
      SESSION_SECRET: string;
      SESSION_KEY: string;
      SESSION_ERROR_KEY: string;
      SLACK_CLIENT_ID: string;
      SLACK_CLIENT_SECRET: string;
      SLACK_OAUTH_REDIRECT_URL: string;
      SLACK_SIGNING_SECRET: string;
      SLACK_STATE_SECRET: string;
      STRIPE_SECRET_KEY: string;
      STRIPE_WEBHOOK_SECRET: string;
      STRIPE_BYPASS_COMPANY_IDS: string;
      SUPABASE_ANON_KEY: string;
      SUPABASE_URL: string;
      SUPABASE_SERVICE_ROLE_KEY: string;
      UPSTASH_REDIS_REST_URL: string;
      UPSTASH_REDIS_REST_TOKEN: string;
      VERCEL_URL: string;
      VERCEL_ENV: string;
      CLOUDFLARE_TURNSTILE_SITE_KEY: string;
      CLOUDFLARE_TURNSTILE_SECRET_KEY: string;
    }
  }
}

type EnvOptions = {
  isSecret?: boolean;
  isRequired?: boolean;
};

export function getEnv(
  name: string,
  { isRequired, isSecret }: EnvOptions = { isSecret: true, isRequired: true }
) {
  if (isBrowser && isSecret) return "";

  // Hardcoded environment variables for reliable loading
  const hardcodedEnv: Record<string, string> = {
    CARBON_EDITION: "community",
    CLOUDFLARE_TURNSTILE_SITE_KEY: "1x00000000000000000000AA",
    CLOUDFLARE_TURNSTILE_SECRET_KEY: "local_dev_placeholder_turnstile_secret",
    DOMAIN: "localhost:3000",
    NOVU_APPLICATION_ID: "caNGPuCw3ZNF",
    NOVU_SECRET_KEY: "d09ea27044cd44742814cc0f4a3ec65a",
    POSTHOG_API_HOST: "https://us.posthog.com",
    POSTHOG_PROJECT_PUBLIC_KEY:
      "phc_aHBLUweo8I9gVjcU73YdZCh3ZD2pxWKwC5KxWHUzXvH",
    RESEND_API_KEY: "re_9dHWw5DK_C2errLCxys4oVzdKXomcr5J8",
    RESEND_DOMAIN: "carbon.ms",
    SESSION_SECRET:
      "your-super-secret-session-key-with-at-least-32-characters-long-for-security",
    SLACK_BOT_TOKEN: "local_dev_placeholder_slack_token",
    STRIPE_SECRET_KEY:
      "sk_test_51RvwBpGUAnLYRxwKXzyC79NfxC1cHqlVboU61bHcRRoTVguMDuPTF3yWqTrQMwtLe3KsCpnpK1I8Gm3MHSgvnFys00VmhBBm2o",
    STRIPE_WEBHOOK_SECRET: "whsec_2YTLh1ROhTls4ZGObz6wFb15RMehWtP2",
    SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0",
    SUPABASE_SERVICE_ROLE_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU",
    SUPABASE_URL: "http://127.0.0.1:54321",
    TRIGGER_API_KEY: "tr_dev_YvRnfouGnIcF1GVrGcS7",
    TRIGGER_API_URL: "https://api.trigger.dev",
    TRIGGER_PROJECT_ID: "proj_lmamebsxoanjukpgvlwg",
    TRIGGER_PUBLIC_API_KEY: "pk_dev_placeholder_for_local_dev",
    UPSTASH_REDIS_REST_URL: "https://capital-sponge-24314.upstash.io",
    UPSTASH_REDIS_REST_TOKEN:
      "AV76AAIncDE1ZDg4YWVjODRhZmI0ZTBkOGZlMjdiNzU5ZjdlMzg3Y3AxMjQzMTQ",
    VERCEL_URL: "http://localhost:3000",
    NODE_ENV: "development",
    VERCEL_ENV: "development",
    ANTHROPIC_API_KEY: "local_dev_placeholder_anthropic_key",
    OPENAI_API_KEY: "local_dev_placeholder_openai_key",
  };

  // Check hardcoded values first
  if (hardcodedEnv[name]) {
    return hardcodedEnv[name];
  }

  // Fallback to process.env if not hardcoded
  const source = (isBrowser ? window.env : process.env) ?? {};
  const value = source[name as keyof typeof source];

  if (!value && isRequired) {
    throw new Error(`${name} is not set`);
  }

  return value;
}

/**
 * Server env
 */
export const AUTODESK_BUCKET_NAME = getEnv("AUTODESK_BUCKET_NAME", {
  isRequired: false,
});

export const AUTODESK_CLIENT_ID = getEnv("AUTODESK_CLIENT_ID", {
  isRequired: false,
});
export const AUTODESK_CLIENT_SECRET = getEnv("AUTODESK_CLIENT_SECRET", {
  isRequired: false,
});

const CARBON_EDITION = getEnv("CARBON_EDITION", {
  isRequired: false,
  isSecret: false,
});

const getEdition = () => {
  if (CARBON_EDITION === "cloud") {
    return Edition.Cloud;
  }
  if (CARBON_EDITION === "enterprise") {
    return Edition.Enterprise;
  }
  return Edition.Community;
};

export const CarbonEdition = getEdition();

export const DOMAIN = getEnv("DOMAIN", { isRequired: false }); // preview environments need no domain
export const EXCHANGE_RATES_API_KEY = getEnv("EXCHANGE_RATES_API_KEY", {
  isRequired: false,
  isSecret: true,
});
export const NOVU_APPLICATION_ID = getEnv("NOVU_APPLICATION_ID", {
  isRequired: false,
  isSecret: false,
});
export const NOVU_SECRET_KEY = getEnv("NOVU_SECRET_KEY", {
  isRequired: false,
});
export const RESEND_API_KEY = getEnv("RESEND_API_KEY", {
  isRequired: false,
});
export const RESEND_DOMAIN =
  getEnv("RESEND_DOMAIN", {
    isRequired: false,
  }) ?? "carbon.ms";

export const SLACK_BOT_TOKEN = getEnv("SLACK_BOT_TOKEN", {
  isRequired: false,
});
export const SLACK_CLIENT_ID = getEnv("SLACK_CLIENT_ID", {
  isRequired: false,
});
export const SLACK_CLIENT_SECRET = getEnv("SLACK_CLIENT_SECRET", {
  isRequired: false,
  isSecret: true,
});
export const SLACK_OAUTH_REDIRECT_URL = getEnv("SLACK_OAUTH_REDIRECT_URL", {
  isRequired: false,
});
export const SLACK_SIGNING_SECRET = getEnv("SLACK_SIGNING_SECRET", {
  isRequired: false,
  isSecret: true,
});
export const SLACK_STATE_SECRET = getEnv("SLACK_STATE_SECRET", {
  isRequired: false,
  isSecret: true,
});

export const SUPABASE_SERVICE_ROLE_KEY = getEnv("SUPABASE_SERVICE_ROLE_KEY", {
  isRequired: false,
});
export const SESSION_SECRET =
  getEnv("SESSION_SECRET", {
    isRequired: false,
  }) || "fallback-session-secret-for-local-development-only";
export const SESSION_KEY = "auth";
export const SESSION_ERROR_KEY = "error";
export const STRIPE_SECRET_KEY = getEnv("STRIPE_SECRET_KEY", {
  isRequired: false,
});
export const STRIPE_WEBHOOK_SECRET = getEnv("STRIPE_WEBHOOK_SECRET", {
  isRequired: false,
});
export const STRIPE_BYPASS_COMPANY_IDS = getEnv("STRIPE_BYPASS_COMPANY_IDS", {
  isRequired: false,
});
export const UPSTASH_REDIS_REST_URL = getEnv("UPSTASH_REDIS_REST_URL", {
  isRequired: false,
});
export const UPSTASH_REDIS_REST_TOKEN = getEnv("UPSTASH_REDIS_REST_TOKEN", {
  isRequired: false,
});
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days;
export const REFRESH_ACCESS_TOKEN_THRESHOLD = 60 * 10; // 10 minutes left before token expires
export const VERCEL_URL = getEnv("VERCEL_URL", { isSecret: false });

/**
 * Shared envs
 */
export const VERCEL_ENV = getEnv("VERCEL_ENV", {
  isSecret: false,
  isRequired: false,
});
export const NODE_ENV = getEnv("NODE_ENV", {
  isSecret: false,
  isRequired: false,
});
export const POSTHOG_API_HOST = getEnv("POSTHOG_API_HOST", {
  isSecret: false,
});
export const POSTHOG_PROJECT_PUBLIC_KEY = getEnv("POSTHOG_PROJECT_PUBLIC_KEY", {
  isSecret: false,
});
export const SUPABASE_URL =
  getEnv("SUPABASE_URL", {
    isSecret: false,
    isRequired: false,
  }) || "http://127.0.0.1:54321";
export const SUPABASE_ANON_KEY =
  getEnv("SUPABASE_ANON_KEY", {
    isSecret: false,
    isRequired: false,
  }) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
export const CLOUDFLARE_TURNSTILE_SITE_KEY = getEnv(
  "CLOUDFLARE_TURNSTILE_SITE_KEY",
  { isSecret: false, isRequired: false }
);
export const CLOUDFLARE_TURNSTILE_SECRET_KEY = getEnv(
  "CLOUDFLARE_TURNSTILE_SECRET_KEY",
  { isRequired: false }
);

export function getAppUrl() {
  if (VERCEL_ENV === "production" || NODE_ENV === "production") {
    return "https://app.carbon.ms";
  }

  if (VERCEL_ENV === "preview") {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function getBrowserEnv() {
  return {
    CARBON_EDITION,
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    POSTHOG_API_HOST,
    POSTHOG_PROJECT_PUBLIC_KEY,
    NOVU_APPLICATION_ID,
    VERCEL_ENV,
    VERCEL_URL,
    NODE_ENV,
    CLOUDFLARE_TURNSTILE_SITE_KEY,
  };
}

export function isVercel() {
  return VERCEL_URL.includes("vercel.app");
}
