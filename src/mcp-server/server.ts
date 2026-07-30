import "dotenv/config";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { config } from "../config/config.js";


import { registerPingTool } from "../tools/pingTool.js";
import { registerFailureAnalyzer } from "../tools/failureAnalyzer.js";
import { registerReportAnalyzer } from "../tools/reportAnalyzer.js";

import { registerSuggestFix } from "../tools/suggestFix.js";
import { registerFailureClassification } from "../tools/classifyFailure.js";
import { registerFlakyDetector } from "../tools/flakyDetector.js";
import { registerTestCaseGenerator } from "../tools/testCaseGenerator.js";
import { registerPlaywrightScriptGenerator } from "../tools/playwrightScriptGenerator.js";
import { registerApiTestGenerator } from "../tools/apiTestGenerator.js";
import { registerBugReportGenerator } from "../tools/bugReportGenerator.js";


async function main() {

    try {


        console.error(
            "MCP SERVER STARTED"
        );


        const server = new McpServer({

            name: config.app.name,

            version: config.app.version,

        });


        console.error(
            "SERVER CREATED"
        );



        registerPingTool(server);

        console.error(
            "Ping registered"
        );



        registerFailureAnalyzer(server);

        console.error(
            "Failure Analyzer registered"
        );



        registerReportAnalyzer(server);

        console.error(
            "Report Analyzer registered"
        );



        registerSuggestFix(server);

        console.error(
            "Suggest Fix registered"
        );



        registerFailureClassification(server);

        console.error(
            "Failure Classification registered"
        );



        registerFlakyDetector(server);

        console.error(
            "Flaky Detector registered"
        );



        registerTestCaseGenerator(server);

        console.error(
            "Test Case Generator registered"
        );



        registerPlaywrightScriptGenerator(server);

        console.error(
            "Playwright Script Generator registered"
        );



        registerApiTestGenerator(server);

        console.error(
            "API Test Generator registered"
        );



        registerBugReportGenerator(server);

        console.error(
            "Bug Report Generator registered"
        );



        const transport =
            new StdioServerTransport();



        console.error(
            "CONNECTING MCP TRANSPORT"
        );



        await server.connect(
            transport
        );



        console.error(
            `${config.app.name} MCP Server running successfully`
        );


    }
    catch(error) {


        console.error(
            "MCP SERVER ERROR:",
            error
        );


        process.exit(1);

    }

}


main();