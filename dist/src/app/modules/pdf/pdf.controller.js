"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDF = void 0;
const HtmlPdfGenerator_1 = require("./HtmlPdfGenerator");
const pdf_queue_1 = require("./pdf.queue");
const generatePDF = async (req, res) => {
    try {
        const html = (0, HtmlPdfGenerator_1.htmlContent)(req.body);
        const pdfBuffer = await (0, pdf_queue_1.safeGeneratePDF)(html);
        if (!pdfBuffer) {
            return res.status(500).json({ success: false, message: "PDF generation failed" });
        }
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", 'attachment; filename="AdmissionForm.pdf"');
        res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
        res.send(pdfBuffer);
    }
    catch (error) {
        console.error("PDF Controller Error:", error);
        res.status(500).send("Internal Server Error");
    }
};
exports.generatePDF = generatePDF;
//# sourceMappingURL=pdf.controller.js.map