"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleDriveRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const googleDrive_controller_1 = require("./googleDrive.controller");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
router.post("/upload-file", upload.single("file"), googleDrive_controller_1.GoogleDriveController.uploadFile);
exports.GoogleDriveRoutes = router;
//# sourceMappingURL=googleDrive.route.js.map