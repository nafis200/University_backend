"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDFBuffer = void 0;
const browser_manager_1 = require("./browser.manager");
const generatePDFBuffer = async (html) => {
    const browser = await (0, browser_manager_1.getBrowser)();
    const page = await browser.newPage();
    try {
        await page.setContent(html, { waitUntil: "networkidle0", timeout: 300000 });
        const pdf = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" }
        });
        return Buffer.from(pdf);
    }
    finally {
        await page.close();
    }
};
exports.generatePDFBuffer = generatePDFBuffer;
// // hey -n 100 -c 20 -m POST -H "Content-Type: application/json" -D test_data.json http://localhost:5000/api/pdf/pdfreader
//# sourceMappingURL=pdf.service.js.map