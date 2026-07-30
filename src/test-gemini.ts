import { askGroq } from "./ai/groqClient.js";


async function test(){

    const answer = await askGroq(
        "Explain API testing in one sentence"
    );

    console.log(answer);

}


test();