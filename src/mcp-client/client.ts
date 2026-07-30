import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";


let client: Client | null = null;


export async function getMcpClient() {

    if (client) {
        return client;
    }


    const transport = new StdioClientTransport({

        command: "tsx",

        args: [
            "src/mcp-server/server.ts"
        ]

    });


    client = new Client(
        {
            name: "qa-copilot-api-client",
            version: "1.0.0"
        },
        {
            capabilities:{}
        }
    );


    await client.connect(transport);


    console.log("Connected to MCP Server");


    return client;

}