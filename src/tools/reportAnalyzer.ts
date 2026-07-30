import fs from "fs";
import path from "path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function registerReportAnalyzer(server: McpServer) {

  server.tool(
    "analyze_report",
    "Analyze automation test report and extract failure details",
    {},
    async () => {

      try {

        const reportPath = path.join(
          process.cwd(),
          "src/reports/sample-report.json"
        );


        if (!fs.existsSync(reportPath)) {
          throw new Error("Test report file not found");
        }


        const reportData = fs.readFileSync(
          reportPath,
          "utf-8"
        );


        const report = JSON.parse(reportData);


        const errorMessage =
          report?.error?.message?.toLowerCase() || "";


        let failureType = "Unknown Failure";
        let severity = "Medium";


        if (errorMessage.includes("locator")) {

          failureType = "Locator Failure";
          severity = "High";

        }
        else if (errorMessage.includes("timeout")) {

          failureType = "Timeout Failure";
          severity = "High";

        }
        else if (
          errorMessage.includes("assert") ||
          errorMessage.includes("expected")
        ) {

          failureType = "Assertion Failure";
          severity = "Medium";

        }
        else if (
          errorMessage.includes("network") ||
          errorMessage.includes("api")
        ) {

          failureType = "API Failure";
          severity = "High";

        }


        const analysis = {

          testName: report.testName,

          status: report.status,

          failureType,

          severity,

          errorMessage: report.error.message,

          stackTrace:
            report.error.stack,

          environment:
            report.environment,


          aiPrompt:
          `
          Analyze this automation failure.

          Test:
          ${report.testName}

          Failure Type:
          ${failureType}

          Error:
          ${report.error.message}

          Provide:
          1. Root cause
          2. Possible fix
          3. Prevention steps
          `

        };


        return {

          content: [

            {
              type: "text",

              text: JSON.stringify(
                analysis,
                null,
                2
              )

            }

          ]

        };


      } catch(error:any) {


        return {

          content:[

            {

              type:"text",

              text:
              `Report Analyzer Error: ${error.message}`

            }

          ]

        };

      }

    }
  );

}