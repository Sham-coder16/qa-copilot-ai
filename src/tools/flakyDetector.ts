import fs from "fs";
import { z } from "zod";

import { generateAIResponse } from "../ai/aiService.js";
import {
  successResponse,
  errorResponse,
} from "../utils/mcpResponse.js";

import { config } from "../config/config.js";

interface FlakyTest {
  title: string;
  status: string;
  retries: number;
}

export async function detectFlakyTests() {
  const reportPath = config.report.path;

  if (!fs.existsSync(reportPath)) {
    throw new Error(
      `Playwright report not found: ${reportPath}`
    );
  }

  const report = JSON.parse(
    fs.readFileSync(reportPath, "utf8")
  );

  const flakyTests: FlakyTest[] = [];

  function traverse(node: any) {
    if (!node) return;

    if (Array.isArray(node)) {
      node.forEach(traverse);
      return;
    }

    if (typeof node === "object") {
      if (
        node.title &&
        node.results &&
        Array.isArray(node.results)
      ) {
        const retries = Math.max(
          0,
          node.results.length - 1
        );

        const lastResult =
          node.results[node.results.length - 1];

        flakyTests.push({
          title: node.title,
          status: lastResult?.status ?? "unknown",
          retries,
        });
      }

      Object.values(node).forEach(traverse);
    }
  }

  traverse(report);

  const flakyOnly = flakyTests.filter(
    (t) => t.retries > 0
  );

  const prompt = `
You are a Principal QA Automation Architect.

Analyze the following flaky Playwright tests.

${JSON.stringify(flakyOnly, null, 2)}

Provide:

1. Executive Summary

2. Flaky Score (0-100)

3. Risk Level

4. Root Cause

5. Stabilization Recommendations

6. Best Practices
`;

  const aiResponse =
    await generateAIResponse(prompt);

  return {
    totalTests: flakyTests.length,
    flakyTests: flakyOnly.length,
    flakyList: flakyOnly,
    analysis: aiResponse,
  };
}

export function registerFlakyDetector(
  server: any
) {
  server.tool(
    "detect_flaky_tests",

    "Detect flaky Playwright tests using AI.",

    {},

    async () => {
      try {
        const result =
          await detectFlakyTests();

        const response = `
==================================
QA Copilot AI Flaky Test Report
==================================

Total Tests : ${result.totalTests}

Flaky Tests : ${result.flakyTests}

${result.analysis}
`;

        return successResponse(response);
      } catch (error) {
        return errorResponse(error);
      }
    }
  );
}