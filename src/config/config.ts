export const config = {
  app: {
    name: "QA Copilot AI",
    version: "1.0.0",
  },

  report: {
    // Playwright JSON Report
    path: "src/reports/results.json",
  },

  ai: {
    provider: "groq",
    model: "llama-3.3-70b-versatile",
  },

  server: {
    port: 3000,
  },
} as const;