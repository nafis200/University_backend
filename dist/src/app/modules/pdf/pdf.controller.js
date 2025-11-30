"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDF = void 0;
const HtmlPdfGenerator_1 = require("./HtmlPdfGenerator");
const pdf_service_1 = require("./pdf.service");
const pdfData_1 = require("./pdfData");
const generatePDF = async (req, res) => {
    try {
        const html = (0, HtmlPdfGenerator_1.htmlContent)(pdfData_1.realPdf);
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