import "dotenv/config";
import app from "./app.js";

const PORT = 4000;

const server = app.listen(PORT, "0.0.0.0", () => {
    const address = server.address();

    console.log("Server address:", address);
    console.log(`QA Copilot REST API running on port ${PORT}`);
});

server.on("error", (error) => {
    console.error("Server error:", error);
});