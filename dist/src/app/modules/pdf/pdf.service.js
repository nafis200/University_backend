"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDfService = exports.closeBrowser = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const p_limit_1 = __importDefault(require("p-limit"));
let browser = null;
const getBrowser = async () => {
    if (!browser) {
        browser = await puppeteer_1.default.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
    }
    return browser;
};
const limit = (0, p_limit_1.default)(50);
const generatePDFBuffer = async (htmlContent) => {
    return limit(async () => {
        const browser = await getBrowser();
        const page = await browser.newPage();
        try {
            await page.setContent(htmlContent, { waitUntil: "networkidle0" });
            const pdfBuffer = await page.pdf({
                format: "A4",
                printBackground: true,
                margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
            });
            return pdfBuffer;
        }
        finally {
            await page.close();
        }
    });
};
const closeBrowser = async () => {
    if (browser) {
        await browser.close();
        browser = null;
    }
};
exports.closeBrowser = closeBrowser;
exports.PDfService = {
    generatePDFBuffer,
};
//# sourceMappingURL=pdf.service.js.map