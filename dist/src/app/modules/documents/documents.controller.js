"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const documents_services_1 = require("./documents.services");
const upsertDocuments = (0, catchAsync_1.default)(async (req, res) => {
    const result = await documents_services_1.DocumentServices.upsertDocuments(req.body);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Document information updated successfully!",
        data: result.data,
    });
});
exports.DocumentController = {
    upsertDocuments,
};
//# sourceMappingURL=documents.controller.js.map