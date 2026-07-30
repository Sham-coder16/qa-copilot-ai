import { askGroq } from "./groqClient.js";

/**
 * Compatibility wrapper.
 *
 * The project now uses Groq as the AI provider.
 * Existing code that imports askAI() will continue to work
 * without requiring changes.
 */
export async function askAI(
  prompt: string
): Promise<string> {
  return await askGroq(prompt);
}