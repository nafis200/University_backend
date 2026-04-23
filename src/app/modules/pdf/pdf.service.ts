import { getBrowser } from "./browser.manager";


export const generatePDFBuffer = async (html: string): Promise<Buffer> => {
  const browser = await getBrowser();
  const page = await browser.newPage();
  
  try {

    await page.setContent(html, { waitUntil: "networkidle0", timeout: 30000 });
    
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" }
    });
    
    return Buffer.from(pdf);
  } finally {
    await page.close(); 
  }
};