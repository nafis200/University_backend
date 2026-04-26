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
    const { applyEndDate } = req.body;
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
    const result = await excel_services_1.ExcelService.uploadExcelFile(file, applyEndDate);
    return (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Excel file uploaded and processed successfully',
        data: result,
    });
});
const getDateApplication = (0, catchAsync_1.default)(async (req, res) => {
    const { gstApplicationId } = req.params;
    if (!gstApplicationId) {
        return (0, sendResponse_1.default)(res, {
            status: 400,
            success: false,
            message: "gstApplicationId is required",
        });
    }
    const data = await excel_services_1.ExcelService.getDateApplicationByGstApplicationId(gstApplicationId);
    if (!data) {
        return (0, sendResponse_1.default)(res, {
            status: 404,
            success: false,
            message: "DateApplication not found",
        });
    }
    (0, sendResponse_1.default)(res, {
        status: 200,
        success: true,
        message: "DateApplication fetched successfully",
        data,
    });
});
const updateDateApplication = (0, catchAsync_1.default)(async (req, res) => {
    const { gstApplicationId } = req.params;
    const { applyEndDate } = req.body;
    if (!gstApplicationId || !applyEndDate) {
        return (0, sendResponse_1.default)(res, {
            status: 400,
            success: false,
            message: "gstApplicationId and applyEndDate are required",
        });
    }
    const data = await excel_services_1.ExcelService.updateDateApplicationByGstApplicationId(gstApplicationId, { applyEndDate: new Date(applyEndDate) });
    (0, sendResponse_1.default)(res, {
        status: 200,
        success: true,
        message: "DateApplication updated successfully",
        data,
    });
});
const updateDateStatus = (0, catchAsync_1.default)(async (req, res) => {
    const { gstApplicationId } = req.params;
    if (!gstApplicationId) {
        return (0, sendResponse_1.default)(res, {
            status: 400,
            success: false,
            message: "gstApplicationId and applyEndDate are required",
        });
    }
    const data = await excel_services_1.ExcelService.updateDateApplicationStatus(gstApplicationId);
    (0, sendResponse_1.default)(res, {
        status: 200,
        success: true,
        message: "DateApplication updated successfully",
        data,
    });
});
exports.FileController = {
    uploadFile,
    getDateApplication,
    updateDateApplication,
    updateDateStatus
};
//# sourceMappingURL=excel.controller.js.map