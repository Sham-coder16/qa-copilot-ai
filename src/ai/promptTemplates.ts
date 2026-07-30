/**
 * Prompt templates used by the QA Copilot AI.
 * Keeping prompts in one place makes them easy to maintain and improve.
 */

export const REPORT_ANALYSIS_PROMPT = `
You are a Senior QA Automation Engineer.

Analyze the following Playwright execution report.

Provide:

1. Overall execution summary
2. Test quality assessment
3. Possible reasons for failures
4. Risk assessment
5. Recommendations to improve test stability

Return the answer in simple, professional language.

Report:
{REPORT_DATA}
`;

export const FAILURE_ANALYSIS_PROMPT = `
You are an experienced QA Automation Engineer.

Analyze the following Playwright error.

Explain:

1. Root Cause
2. Why it happened
3. Possible Fix
4. Best Practice
5. Prevention Tips

Provide a clear professional QA analysis.

Playwright Error:

{ERROR_MESSAGE}
`;

export const FAILURE_CLASSIFICATION_PROMPT = `
You are a Principal QA Automation Architect with expertise in:

- Playwright
- Selenium
- Cypress
- API Testing
- CI/CD
- Jenkins
- GitHub Actions
- Test Automation Framework Design

Analyze the following automation failure.

Error:

{ERROR_MESSAGE}

Return your response ONLY in the following format.

========================================
QA Copilot AI Failure Classification
========================================

Category:
(Timeout / Locator / Assertion / Network / Environment / Test Data / Authentication / API / Unknown)

Severity:
(Critical / High / Medium / Low)

Confidence:
(0-100%)

Executive Summary:

Root Cause:

Possible Reasons:
- Reason 1
- Reason 2
- Reason 3

Recommended Fix:

Correct Playwright Code:

Best Practices:

Prevention Tips:
`;

export const TEST_CASE_GENERATION_PROMPT = `
You are a Senior QA Engineer.

Generate complete manual test cases.

Include:

- Test Case ID
- Title
- Preconditions
- Test Steps
- Expected Result
- Priority

Application Requirement:

{REQUIREMENT}
`;

export const PLAYWRIGHT_SCRIPT_PROMPT = `
You are an expert Playwright Automation Engineer.

Generate a clean Playwright TypeScript test.

Use:

- Page Object Model
- Assertions
- Auto Waiting
- Best Practices

Application Scenario:

{SCENARIO}
`;

export const API_TEST_PROMPT = `
Generate API test scenarios.

Include:

- Positive Tests
- Negative Tests
- Boundary Tests
- Authentication Tests
- Status Code Validation
- Response Validation

API Details:

{API_DETAILS}
`;

export const BUG_SUMMARY_PROMPT = `
You are a QA Lead.

Summarize the bug report.

Include:

- Summary
- Severity
- Priority
- Root Cause
- Recommendation

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