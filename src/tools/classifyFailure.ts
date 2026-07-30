import { z } from "zod";

import { generateAIResponse } from "../ai/aiService.js";
import { createFailureClassificationPrompt } from "../ai/promptTemplates.js";

import {
  successResponse,
  errorResponse,
} from "../utils/mcpResponse.js";

export async function classifyFailure(
  errorMessage: string
) {
  const prompt =
    createFailureClassificationPrompt(
      errorMessage
    );

  const aiResponse =
    await generateAIResponse(prompt);

  return {
    classification: aiResponse,
  };
}

/**
 * Register MCP Failure Classification Tool
 */
export function registerFailureClassification(
  server: any
) {
  server.tool(
    "classify_failure",

    "Classify Playwright and automation failures using AI.",

    {
      errorMessage: z
        .string()
        .describe(
          "Playwright or Automation error message"
        ),
    },

    async ({
      errorMessage,
    }: {
      errorMessage: string;
    }) => {
      try {
        const result =
          await classifyFailure(
            errorMessage
          );

        return successResponse(
          result.classification
        );
      } catch (error) {
        return errorResponse(error);
      }
    }
  );
}