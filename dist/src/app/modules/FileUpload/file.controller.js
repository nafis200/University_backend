"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const zod_1 = require("zod");
const file_service_1 = require("./file.service");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const fileValidationSchema = zod_1.z.object({
    mimetype: zod_1.z.enum([
        "application/sql",
        "application/x-sql",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ]),
});
const uploadFile = (0, catchAsync_1.default)(async (req, res) => {
    const file = req.file;
    if (!file) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "No file uploaded!",
        });
    }
    const validation = fileValidationSchema.safeParse({
        mimetype: file.mimetype,
    });
    if (!validation.success) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "Invalid file type! Only SQL or Excel files are allowed.",
        });
    }
    // Process file
    const result = await file_service_1.FileService.uploadFile(file);
    return (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "File uploaded successfully",
        data: result,
    });
});
exports.FileController = {
    uploadFile,
};
//# sourceMappingURL=file.controller.js.map