import { Router } from "express";
import { askAI } from "../services/aiService.js";
import { getMcpClient } from "../mcp-client/client.js";


const router = Router();

console.log("API ROUTES LOADED");


// ===============================
// Health Check
// ===============================

router.get("/health", (_req, res) => {

    res.json({
        status: "OK",
        service: "QA Copilot AI"
    });

});




// ===============================
// Analyze Failure
// ===============================

router.post("/analyze", async (req, res) => {
    console.log("TEST CASE API HIT");

    try {

        const { error } = req.body;


        if (!error) {

            return res.status(400).json({
                message:"Error message required"
            });

        }


        const result = await askAI(`

You are an expert QA Automation Engineer.

Analyze this automation failure:

${error}


Provide:

Failure Type:
Root Cause:
Explanation:
Suggested Fix:
Prevention Steps:

`);


        res.json({

            analysis: result

        });


    }
    catch(error:any){

        res.status(500).json({

            message:"AI analysis failed",
            error:error.message

        });

    }

});





// ===============================
// Analyze Report using MCP
// ===============================

router.get("/analyze-report", async (_req,res)=>{

    try {


        const mcpClient = await getMcpClient();


        const report =
            await mcpClient.callTool({

                name:"analyze_report",

                arguments:{}

            });



        const aiResult =
            await askAI(`

Analyze this report:

${JSON.stringify(report,null,2)}

Provide:

1. Failure Classification
2. Root Cause
3. Fix Suggestion
4. Prevention Steps

`);



        res.json({

            mcpAnalysis:report,

            aiAnalysis:aiResult

        });



    }
    catch(error:any){

        res.status(500).json({

            message:"Report analysis failed",
            error:error.message

        });

    }


});








// ===============================
// Flaky Test Detection
// ===============================

router.get("/flaky-tests", async (_req,res)=>{


    try {


        const mcpClient =
            await getMcpClient();


        const result =
            await mcpClient.callTool({

                name:"detect_flaky_tests",

                arguments:{}

            });



        res.json({

            flakyAnalysis:result

        });



    }
    catch(error:any){

        res.status(500).json({

            message:"Flaky detection failed",
            error:error.message

        });

    }


});









// ===============================
// Suggest Fix
// ===============================

router.post("/suggest-fix", async(req,res)=>{


    try {


        const {errorMessage}=req.body;



        if(!errorMessage){

            return res.status(400).json({

                message:"Error message required"

            });

        }



        const mcpClient =
            await getMcpClient();



        const result =
            await mcpClient.callTool({

                name:"suggest_fix",

                arguments:{

                    errorMessage

                }

            });



        res.json({

            fixSuggestion:result

        });



    }
    catch(error:any){


        res.status(500).json({

            message:"Suggest fix failed",
            error:error.message

        });


    }


});









// ===============================
// Bug Report Generator
// ===============================

router.post("/bug-report", async(req,res)=>{


    try {


        const {bugDetails}=req.body;



        if(!bugDetails){

            return res.status(400).json({

                message:"Bug details required"

            });

        }



        const mcpClient =
            await getMcpClient();



        const result =
            await mcpClient.callTool({

                name:"summarize_bug",

                arguments:{

                    bugDetails

                }

            });



        res.json({

            bugReport:result

        });



    }
    catch(error:any){

        res.status(500).json({

            message:"Bug report failed",
            error:error.message

        });

    }


});









// ===============================
// Test Case Generator
// ===============================

router.post("/generate-test-cases", async(req,res)=>{


    try {


        const {requirement}=req.body;



        if(!requirement){

            return res.status(400).json({

                message:"Requirement required"

            });

        }



        const mcpClient =
            await getMcpClient();



        const result =
            await mcpClient.callTool({

                name:"generate_test_cases",

                arguments:{

                    requirement

                }

            });



        res.json({

            testCases:result

        });



    }
    catch(error:any){


        res.status(500).json({

            message:"Test case generation failed",
            error:error.message

        });

    }


});









// ===============================
// Playwright Script Generator
// ===============================

router.post("/generate-playwright-script", async(req,res)=>{


    try {


        const {scenario}=req.body;



        if(!scenario){

            return res.status(400).json({

                message:"Scenario required"

            });

        }



        const mcpClient =
            await getMcpClient();



        const result =
            await mcpClient.callTool({

                name:"generate_playwright_script",

                arguments:{

                    scenario

                }

            });



        res.json({

            playwrightScript:result

        });



    }
    catch(error:any){


        res.status(500).json({

            message:"Playwright script generation failed",

            error:error.message

        });

    }


});






export { router };