import { z } from "zod";

import { generateAIResponse } from "../ai/aiService.js";
import { BUG_SUMMARY_PROMPT } from "../ai/promptTemplates.js";
import {
  successResponse,
  errorResponse,
} from "../utils/mcpResponse.js";

export async function generateBugReport(
  bugDetails: string
) {
  const prompt = BUG_SUMMARY_PROMPT.replace(
    "{BUG_DETAILS}",
    bugDetails
  );

  const aiResponse = await generateAIResponse(prompt);

  return {
    report: aiResponse,
  };
}

export function registerBugReportGenerator(
  server: any
) {
  server.tool(
    "summarize_bug",

    "Generate professional bug reports using AI.",

    {
      bugDetails: z
        .string()
        .describe("Bug description or issue"),
    },

    async ({
      bugDetails,
    }: {
      bugDetails: string;
    }) => {
      try {
        const result =
          await generateBugReport(
            bugDetails
          );

        return successResponse(
          result.report
        );
      } catch (error) {
        return errorResponse(error);
      }
    }
  );
}