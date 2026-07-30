import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  retries: 2,

  reporter: [
    [
      "json",
      {
        outputFile: "src/reports/results.json",
      },
    ],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],

  use: {
    headless: true,

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "retain-on-failure",
  },
});