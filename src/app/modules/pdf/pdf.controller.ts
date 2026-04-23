import { Request, Response } from "express"; 
import { htmlContent } from "./HtmlPdfGenerator";
import { safeGeneratePDF } from "./pdf.queue";

export const generatePDF = async (req: Request, res: Response) => {
  try {
    const html = htmlContent(req.body);
    const pdfBuffer = await safeGeneratePDF(html);

    if (!pdfBuffer) {
      return res.status(500).json({ success: false, message: "PDF generation failed" });
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="AdmissionForm.pdf"');
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    
    res.send(pdfBuffer);
    
  } catch (error) {
    console.error("PDF Controller Error:", error);
    res.status(500).send("Internal Server Error");
  }
};