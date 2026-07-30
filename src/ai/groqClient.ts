import Groq from "groq-sdk";
import dotenv from "dotenv";


dotenv.config({
    path: ".env"
});


let groqClient: Groq | null = null;


function getGroqClient() {

    if (groqClient) {
        return groqClient;
    }


    const apiKey = process.env.GROQ_API_KEY;


    console.log(
        "Groq API Key Loaded:",
        apiKey ? "YES" : "NO"
    );


    if (!apiKey) {

        throw new Error(
            "GROQ_API_KEY is missing"
        );

    }


    groqClient = new Groq({
        apiKey
    });


    return groqClient;

}



export async function askGroq(
    prompt: string
) {


    const groq =
        getGroqClient();


    try {


        const result =
            await groq.chat.completions.create({

                model:
                "llama-3.3-70b-versatile",


                messages: [

                    {
                        role: "system",

                        content:
                        `
You are an expert QA Automation Engineer.
Analyze test failures,
find root cause,
and suggest fixes.
`
                    },


                    {
                        role: "user",

                        content: prompt
                    }

                ],


                temperature: 0.3

            });



        return (
            result
            .choices[0]
            .message
            .content || ""
        );


    }
    catch(error) {


        console.error(
            "Groq API Error:",
            error
        );


        throw error;

    }

}