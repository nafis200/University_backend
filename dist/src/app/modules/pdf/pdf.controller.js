"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDF = void 0;
const HtmlPdfGenerator_1 = require("./HtmlPdfGenerator");
const pdf_service_1 = require("./pdf.service");
const generatePDF = async (req, res) => {
    try {
        const pdfData = req.body;
        const html = (0, HtmlPdfGenerator_1.htmlContent)(pdfData);
        const pdfBuffer = await pdf_service_1.PDfService.generatePDFBuffer(html);
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", 'attachment; filename="AdmissionForm.pdf"');
        res.setHeader("Content-Length", pdfBuffer.length.toString());
        res.send(pdfBuffer);
    }
    catch (error) {
        console.error("PDF Generation Error:", error);
        res.status(500).json({
            success: false,
            message: "PDF generation failed",
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.generatePDF = generatePDF;
//# sourceMappingURL=pdf.controller.js.map