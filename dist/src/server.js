"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const browser_manager_1 = require("./app/modules/pdf/browser.manager");
const port = 5000;
async function main() {
    const server = app_1.default.listen(port, () => {
        console.log(`🚀 Server is running on port ${port}`);
    });
    const shutdown = async (signal) => {
        console.log(`\n${signal} received. Closing HTTP server and Puppeteer...`);
        server.close(async (err) => {
            if (err) {
                console.error("Error closing server:", err);
                process.exit(1);
            }
            console.log("HTTP server closed.");
            try {
                await (0, browser_manager_1.closeBrowser)();
                console.log("Puppeteer browser closed safely.");
                process.exit(0);
            }
            catch (err) {
                console.error("Error during browser shutdown:", err);
                process.exit(1);
            }
        });
        setTimeout(() => {
            console.error("Forcefully shutting down after timeout");
            process.exit(1);
        }, 5000);
    };
    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
}
main().catch((err) => {
    console.error("Fatal Error during startup:", err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map