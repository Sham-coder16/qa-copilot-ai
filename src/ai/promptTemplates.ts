/**
 * Prompt templates used by the QA Copilot AI.
 * Keeping prompts in one place makes them easy to maintain and improve.
 */

export const REPORT_ANALYSIS_PROMPT = `
You are a Senior QA Automation Engineer.

Analyze the following Playwright execution report.

Return a professional report in plain text.

Use the following format.

==================================================
QA COPILOT AI - TEST REPORT ANALYSIS
==================================================

Execution Summary:

Test Quality Assessment:

Failed Test Analysis:

Risk Assessment:

Recommendations:

==================================================

Report:

{REPORT_DATA}
`;

export const FAILURE_ANALYSIS_PROMPT = `
You are an experienced QA Automation Engineer.

Analyze the following Playwright error.

Return a professional analysis.

Use this format.

==================================================
QA COPILOT AI - FAILURE ANALYSIS
==================================================

Failure Type:

Root Cause:

Explanation:

Suggested Fix:

Best Practices:

Prevention Tips:

==================================================

Error:

{ERROR_MESSAGE}
`;

export const FAILURE_CLASSIFICATION_PROMPT = `
You are a Principal QA Automation Architect.

Analyze the automation failure.

Return ONLY plain text.

==================================================
QA COPILOT AI - FAILURE CLASSIFICATION
==================================================

Category:

Severity:

Confidence:

Executive Summary:

Root Cause:

Possible Reasons:

1.

2.

3.

Recommended Fix:

Correct Playwright Code:

Best Practices:

Prevention Tips:

==================================================

Error:

{ERROR_MESSAGE}
`;

export const TEST_CASE_GENERATION_PROMPT = `
You are a Senior QA Engineer.

Generate professional manual test cases.

Return plain text.

==================================================
QA COPILOT AI - TEST CASES
==================================================

Test Case ID:

Title:

Preconditions:

Priority:

Test Steps:

1.

2.

3.

Expected Result:

==================================================

Requirement:

{REQUIREMENT}
`;

export const PLAYWRIGHT_SCRIPT_PROMPT = `
You are an expert Playwright Automation Engineer.

Generate a production-ready Playwright TypeScript script.

Use:

- Page Object Model
- Assertions
- Auto Waiting
- Best Practices

Scenario:

{SCENARIO}
`;

export const API_TEST_PROMPT = `
You are a Senior API Test Engineer.

Generate professional API test scenarios.

Include:

Positive Tests

Negative Tests

Boundary Tests

Authentication Tests

Status Code Validation

Response Validation

API Details:

{API_DETAILS}
`;

export const BUG_SUMMARY_PROMPT = `
You are a Senior QA Lead with 10+ years of experience.

Generate a professional bug report.

IMPORTANT RULES

- Return ONLY plain text.
- Do NOT use Markdown.
- Do NOT use ** symbols.
- Do NOT use ## headings.
- Do NOT use bullet symbols (*).
- Make the report easy to read.
- Keep the language professional.

Return EXACTLY in the following format.

==================================================
QA COPILOT AI - BUG REPORT
==================================================

Title:

Summary:

Severity:

Priority:

Environment:

Steps to Reproduce:

1.

2.

3.

Expected Result:

Actual Result:

Root Cause:

Impact:

Recommendation:

==================================================

Bug Details:

{BUG_DETAILS}
`;

/**
 * Generate failure analysis prompt dynamically
 */
export function createFailureAnalysisPrompt(
  errorMessage: string
): string {
  return FAILURE_ANALYSIS_PROMPT.replace(
    "{ERROR_MESSAGE}",
    errorMessage
  );
}

/**
 * Generate report analysis prompt dynamically
 */
export function createReportAnalysisPrompt(
  reportData: string
): string {
  return REPORT_ANALYSIS_PROMPT.replace(
    "{REPORT_DATA}",
    reportData
  );
}

/**
 * Generate failure classification prompt dynamically
 */
export function createFailureClassificationPrompt(
  errorMessage: string
): string {
  return FAILURE_CLASSIFICATION_PROMPT.replace(
    "{ERROR_MESSAGE}",
    errorMessage
  );
}