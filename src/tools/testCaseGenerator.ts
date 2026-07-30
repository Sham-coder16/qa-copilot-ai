import { z } from "zod";

import { generateAIResponse } from "../ai/aiService.js";
import { TEST_CASE_GENERATION_PROMPT } from "../ai/promptTemplates.js";
import {
  successResponse,
  errorResponse,
} from "../utils/mcpResponse.js";

export async function generateTestCases(
  requirement: string
) {
  const prompt = TEST_CASE_GENERATION_PROMPT.replace(
    "{REQUIREMENT}",
    requirement
  );

  const aiResponse = await generateAIResponse(prompt);

  return {
    testCases: aiResponse,
  };
}

/**
 * Register MCP Test Case Generator Tool
 */
export function registerTestCaseGenerator(
  server: any
) {
  server.tool(
    "generate_test_cases",

    "Generate professional manual test cases using AI.",

    {
      requirement: z
        .string()
        .describe("Application requirement or feature"),
    },

    async ({
      requirement,
    }: {
      requirement: string;
    }) => {
      try {
        const result =
          await generateTestCases(requirement);

        return successResponse(
          result.testCases
        );
      } catch (error) {
        return errorResponse(error);
      }
    }
  );
}