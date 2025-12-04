import { Request, Response } from "express";
import { htmlContent } from "./HtmlPdfGenerator";
import { PDfService } from "./pdf.service";
import { realPdf } from "./pdfData";


export const generatePDF = async (req: Request, res: Response) => {
  try {
    const html = htmlContent(realPdf);
    const pdfBuffer = await PDfService.generatePDFBuffer(html);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="AdmissionForm.pdf"');
    res.setHeader("Content-Length", pdfBuffer.length.toString());

    res.send(pdfBuffer);
  } catch (error) {
    console.error("PDF Generation Error:", error);
    res.status(500).json({
      success: false,
      message: "PDF generation failed",
      error: error instanceof Error ? error.message : error,
    });
  }
};
