import { z } from "zod";

import { generateAIResponse } from "../ai/aiService.js";
import {
  successResponse,
  errorResponse,
} from "../utils/mcpResponse.js";

export async function suggestFix(
  errorMessage: string
) {
  const prompt = `
You are a Senior QA Automation Engineer.

Analyze the following Playwright automation failure.

Error:

${errorMessage}

Return your answer in the following format.

========================================
QA Copilot AI Suggest Fix
========================================

Executive Summary

Root Cause

Recommended Fix

Correct Playwright Code

Alternative Solution

Best Practices

Prevention Tips

Confidence (0-100%)
`;

  const aiResponse =
    await generateAIResponse(prompt);

  return {
    suggestion: aiResponse,
  };
}

/**
 * Register MCP Suggest Fix Tool
 */
export function registerSuggestFix(
  server: any
) {
  server.tool(
    "suggest_fix",

    "Suggest AI fixes for Playwright and automation failures.",

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
          await suggestFix(errorMessage);

        return successResponse(
          result.suggestion
        );
      } catch (error) {
        return errorResponse(error);
      }
    }
  );
}