import fs from "fs";
import path from "path";


export function readTestReport() {

    const reportPath = path.join(
        process.cwd(),
        "src",
        "reports",
        "failed-report.json"
    );


    console.log("REPORT PATH USED:", reportPath);


    if (!fs.existsSync(reportPath)) {

        throw new Error(
            `Report file not found: ${reportPath}`
        );

    }


    const report = fs.readFileSync(
        reportPath,
        "utf-8"
    );


    return JSON.parse(report);

}