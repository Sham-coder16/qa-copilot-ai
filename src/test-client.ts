import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";


const transport = new StdioClientTransport({

    command: "npx",

    args: [
        "tsx",
        "src/mcp-server/server.ts"
    ]

});


const client = new Client(

    {
        name: "qa-copilot-test-client",
        version: "1.0.0",
    },

    {
        capabilities: {},
    }

);



async function main() {


    try {


        await client.connect(transport);


        console.log(
            "Connected to MCP Server"
        );



        const tools =
            await client.listTools();



        console.log(
            "\nAvailable Tools:"
        );


        console.log(
            tools.tools.map(
                tool => tool.name
            )
        );



        // ================================
        // FAILURE ANALYSIS TEST
        // ================================


        const failureResponse =
            await client.callTool({

                name: "analyze_failure",

                arguments: {

                    error:
                    "Timeout 30000ms exceeded waiting for locator('button#login')"

                }

            });



        console.log(
            "\nAI Failure Analysis:"
        );


        console.log(

            JSON.stringify(
                failureResponse,
                null,
                2
            )

        );



        // ================================
        // REPORT ANALYSIS TEST
        // ================================


        const reportResponse =
            await client.callTool({

                name: "analyze_report",

                arguments: {}

            });



        console.log(
            "\nAI Report Analysis:"
        );


        console.log(

            JSON.stringify(
                reportResponse,
                null,
                2
            )

        );



    }
    catch(error) {


        console.error(
            "Error:",
            error
        );


    }

}



main();