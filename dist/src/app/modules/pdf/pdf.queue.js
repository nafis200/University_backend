"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeGeneratePDF = void 0;
const p_queue_1 = __importDefault(require("p-queue"));
const pdf_service_1 = require("./pdf.service");
const queue = new p_queue_1.default({ concurrency: 1 });
const safeGeneratePDF = async (html) => {
    return queue.add(() => (0, pdf_service_1.generatePDFBuffer)(html));
};
exports.safeGeneratePDF = safeGeneratePDF;
//# sourceMappingURL=pdf.queue.js.map