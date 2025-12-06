"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleDriveController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const googleDrive_service_1 = require("./googleDrive.service");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
const uploadFile = (0, catchAsync_1.default)(async (req, res) => {
    if (!req.file) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "No file uploaded",
        });
    }
    const { title } = req.body;
    const result = await googleDrive_service_1.GoogleDriveServices.uploadToGoogleDrive(req.file, title);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "File uploaded successfully",
        data: result,
    });
});
const getFiles = (0, catchAsync_1.default)(async (req, res) => {
    const files = await googleDrive_service_1.GoogleDriveServices.getAllFiles();
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Files fetched",
        data: files,
    });
});
const deleteFile = (0, catchAsync_1.default)(async (req, res) => {
    const { fileId } = req.params;
    console.log(fileId);
    if (!fileId) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "File ID is required",
        });
    }
    await googleDrive_service_1.GoogleDriveServices.deleteFile(fileId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "File deleted successfully",
    });
});
exports.GoogleDriveController = {
    upload,
    uploadFile,
    getFiles,
    deleteFile,
};
//# sourceMappingURL=googleDrive.controller.js.map