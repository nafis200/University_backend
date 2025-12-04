"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const zod_1 = require("zod");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const excel_services_1 = require("./excel.services");
const fileValidationSchema = zod_1.z.object({
    mimetype: zod_1.z.enum([
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ]),
});
const uploadFile = (0, catchAsync_1.default)(async (req, res) => {
    const file = req.file;
    if (!file) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: 'No file uploaded!',
        });
    }
    const validation = fileValidationSchema.safeParse({ mimetype: file.mimetype });
    if (!validation.success) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: 'Invalid file type! Only Excel files are allowed.',
        });
    }
    const result = await excel_services_1.ExcelService.uploadExcelFile(file);
    return (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Excel file uploaded and processed successfully',
        data: result,
    });
});
exports.FileController = {
    uploadFile,
};
//# sourceMappingURL=excel.controller.js.map