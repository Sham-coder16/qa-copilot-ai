import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();


const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


export async function askAI(prompt: string) {

    try {

        const response = await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "system",
                    content:
                    "You are an expert QA Automation Engineer. Analyze test failures and provide debugging suggestions."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],

            temperature: 0.3

        });


        return response.choices[0].message.content;


    } catch(error) {

        console.error("Groq API Error:", error);

        throw error;
    }

}