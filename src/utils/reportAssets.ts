import fs from "fs";
import path from "path";

export function findPlaywrightAssets() {

    const root = "test-results";

    const assets = {

        screenshot: "",

        trace: "",

        video: ""

    };

    if (!fs.existsSync(root))
        return assets;

    function walk(folder: string) {

        const files = fs.readdirSync(folder);

        for (const file of files) {

            const full = path.join(folder, file);

            const stat = fs.statSync(full);

            if (stat.isDirectory()) {

                walk(full);

            } else {

                if (
                    file.endsWith(".png")
                ) {

                    assets.screenshot = full;

                }

                if (
                    file.endsWith(".zip")
                ) {

                    assets.trace = full;

                }

                if (
                    file.endsWith(".webm")
                ) {

                    assets.video = full;

                }

            }

        }

    }

    walk(root);

    return assets;

}