"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleDriveController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const multer_1 = __importDefault(require("multer"));
const googleDrive_service_1 = require("./googleDrive.service");
// Multer memory storage
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
// Upload file controller
const uploadFile = (0, catchAsync_1.default)(async (req, res) => {
    if (!req.file) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "No file uploaded",
        });
    }
    const result = await googleDrive_service_1.GoogleDriveServices.uploadToGoogleDrive(req.file);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "File uploaded successfully",
        data: result,
    });
});
exports.GoogleDriveController = {
    upload,
    uploadFile,
};
//# sourceMappingURL=googleDrive.controller.js.map