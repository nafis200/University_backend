"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeBrowser = exports.getBrowser = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
let browser = null;
const getBrowser = async () => {
    if (!browser || !browser.connected) {
        browser = await puppeteer_1.default.launch({
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage", // লিনাক্স মেমোরি সমস্যার জন্য জরুরি
                "--disable-gpu",
            ],
        });
        console.log("Puppeteer Browser Started");
    }
    return browser;
};
exports.getBrowser = getBrowser;
const closeBrowser = async () => {
    if (browser) {
        await browser.close();
        browser = null;
    }
};
exports.closeBrowser = closeBrowser;
//# sourceMappingURL=browser.manager.js.map