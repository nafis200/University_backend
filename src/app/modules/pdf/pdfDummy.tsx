// import puppeteer from "puppeteer";
// import path from "path";
// import fs from "fs";
// import { realPdf } from "./pdfData";
// import { htmlContent } from "./HtmlPdfGenerator";


// export const PDFGenerator = async (): Promise<string> => {
//   try {
//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();
//     await page.setContent(htmlContent, { waitUntil: "networkidle0" });

//     const pdfPath = path.join(process.cwd(), "AdmissionForm.pdf");
//     await page.pdf({
//       path: pdfPath,
//       format: "A4",
//       printBackground: true,
//       margin: { top: "0", bottom: "0", left: "0", right: "0" },
//     });

//     await browser.close();
//     return pdfPath;
//   } catch (err) {
//     console.error("PDF Generation Error:", err);
//     throw err;
//   }
// };
