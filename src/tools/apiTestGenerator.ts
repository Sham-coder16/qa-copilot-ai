import { z } from "zod";

import { generateAIResponse } from "../ai/aiService.js";
import { API_TEST_PROMPT } from "../ai/promptTemplates.js";
import {
  successResponse,
  errorResponse,
} from "../utils/mcpResponse.js";

export async function generateApiTests(
  apiDetails: string
) {
  const prompt = API_TEST_PROMPT.replace(
    "{API_DETAILS}",
    apiDetails
  );

  const aiResponse =
    await generateAIResponse(prompt);

  return {
    apiTests: aiResponse,
  };
}

/**
 * Register MCP API Test Generator
 */
export function registerApiTestGenerator(
  server: any
) {
  server.tool(
    "generate_api_tests",

    "Generate API test scenarios using AI.",

    {
      apiDetails: z
        .string()
        .describe(
          "API endpoint, request and business requirement"
        ),
    },

    async ({
      apiDetails,
    }: {
      apiDetails: string;
    }) => {
      try {
        const result =
          await generateApiTests(
            apiDetails
          );

        return successResponse(
          result.apiTests
        );
      } catch (error) {
        return errorResponse(error);
      }
    }
  );
}