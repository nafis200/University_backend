import { Request, Response } from "express";
import { htmlContent } from "./HtmlPdfGenerator";
import { PDfService } from "./pdf.service";
import { realPdf } from "./pdfData";

export const generatePDF = async (req: Request, res: Response) => {
  try {
    const userData = realPdf; 
    const html = htmlContent(userData); 
    const pdfBuffer = await PDfService.generatePDFBuffer(html);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="AdmissionForm.pdf"`,
      "Content-Length": pdfBuffer.length,
    });

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

export const AdminController = { generatePDF };
