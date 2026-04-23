import puppeteer, { Browser } from "puppeteer";

let browser: Browser | null = null;

export const getBrowser = async (): Promise<Browser> => {
  if (!browser || !browser.connected) {
    browser = await puppeteer.launch({
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

export const closeBrowser = async () => {
  if (browser) {
    await browser.close();
    browser = null;
  }
};