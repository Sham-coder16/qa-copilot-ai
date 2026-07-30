import { askGroq } from "./groqClient.js";

export async function generateAIResponse(
  prompt: string
): Promise<string> {
  try {
    const response = await askGroq(prompt);

    if (!response || response.trim().length === 0) {
      throw new Error("Empty AI response received.");
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`AI Service Error: ${error.message}`);
    }

    throw new Error("Unknown AI Service Error");
  }
}