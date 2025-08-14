import { NOVU_SECRET_KEY } from "@carbon/auth";

// Ensure the environment variable is set for the Novu framework BEFORE importing
if (NOVU_SECRET_KEY && !process.env.NOVU_SECRET_KEY) {
  process.env.NOVU_SECRET_KEY = NOVU_SECRET_KEY;
}

import { serve } from "@novu/framework/remix";
import {
  assignmentWorkflow,
  digitalQuoteResponseWorkflow,
  expirationWorkflow,
  jobCompletedWorkflow,
  messageWorkflow,
} from "~/novu/workflows";

const handler = serve({
  workflows: [
    assignmentWorkflow,
    jobCompletedWorkflow,
    digitalQuoteResponseWorkflow,
    expirationWorkflow,
    messageWorkflow,
  ],
});

export const config = {
  runtime: "nodejs",
};

export { handler as action, handler as loader };
