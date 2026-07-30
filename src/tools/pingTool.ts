import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";


export function registerPingTool(server: McpServer) {

    server.tool(
        "ping",
        "Check QA Copilot MCP server health",
        {},
        async () => {

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({
                            status: "success",
                            message: "QA Copilot AI MCP Server is running"
                        })
                    }
                ]
            };

        }
    );

}