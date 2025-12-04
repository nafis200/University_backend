import puppeteer, { Browser } from "puppeteer";
import pLimit from "p-limit";

let browser: Browser | null = null;


const getBrowser = async () => {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
  return browser;
};


const limit = pLimit(50);

const generatePDFBuffer = async (htmlContent: string) => {
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
    } finally {
      await page.close();
    }
  });
};

export const closeBrowser = async () => {
  if (browser) {
    await browser.close();
    browser = null;
  }
};

export const PDfService = {
  generatePDFBuffer,
};
