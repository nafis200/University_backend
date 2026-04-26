"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfRoutes = void 0;
const express_1 = __importDefault(require("express"));
const pdf_controller_1 = require("./pdf.controller");
const router = express_1.default.Router();
// router.get("/", generatePDF);
router.post("/pdfreader", pdf_controller_1.generatePDF);
router.post("/nafis", (req, res) => {
    console.log(req.body);
    return res.status(200).json({
        success: true,
        message: "Data received successfully!",
        receivedData: req.body,
    });
});
exports.PdfRoutes = router;
//# sourceMappingURL=pdf.route.js.map