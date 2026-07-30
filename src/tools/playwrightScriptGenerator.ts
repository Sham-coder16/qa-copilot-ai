import { z } from "zod";

import { generateAIResponse } from "../ai/aiService.js";
import { PLAYWRIGHT_SCRIPT_PROMPT } from "../ai/promptTemplates.js";
import {
  successResponse,
  errorResponse,
} from "../utils/mcpResponse.js";

export async function generatePlaywrightScript(
  scenario: string
) {
  const prompt = PLAYWRIGHT_SCRIPT_PROMPT.replace(
    "{SCENARIO}",
    scenario
  );

  const aiResponse = await generateAIResponse(prompt);

  return {
    script: aiResponse,
  };
}

/**
 * Register MCP Playwright Script Generator
 */
export function registerPlaywrightScriptGenerator(
  server: any
) {
  server.tool(
    "generate_playwright_script",

    "Generate Playwright TypeScript automation scripts using AI.",

    {
      scenario: z
        .string()
        .describe("Application scenario to automate"),
    },

    async ({
      scenario,
    }: {
      scenario: string;
    }) => {
      try {
        const result =
          await generatePlaywrightScript(
            scenario
          );

        return successResponse(
          result.script
        );
      } catch (error) {
        return errorResponse(error);
      }
    }
  );
}