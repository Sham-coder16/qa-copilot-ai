import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { askAI } from "../services/aiService.js";


export function registerFailureAnalyzer(server:McpServer){


server.tool(

"analyze_failure",

"Analyze test failure using AI",

{
error:z.string()
},

async({error})=>{


const prompt=`

You are an expert QA Automation Engineer.

Analyze this failure:

${error}


Give:

1. Root cause
2. Why failure happened
3. Fix suggestion
4. Prevention steps

`;


const result=await askAI(prompt);


return {

content:[
{
type:"text",
text:result || "No response"
}
]

};


}

);


}