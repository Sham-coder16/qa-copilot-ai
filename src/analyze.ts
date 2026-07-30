import { execSync } from "child_process";

console.log("====================================");
console.log("QA Copilot AI");
console.log("====================================");

try {

    console.log("\nRunning Playwright Tests...\n");

    execSync("npx playwright test", {
        stdio: "inherit"
    });

} catch {

    console.log("\nPlaywright completed with failures.");
    console.log("Continuing AI Analysis...\n");

}

try {

    execSync("npx tsx src/test-client.ts", {
        stdio: "inherit"
    });

} catch (err) {

    console.error(err);

}