"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageControllers = void 0;
const image_services_1 = require("./image.services");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const fileUploader_1 = require("../../../helpars/fileUploader");
const upsertImage = (0, catchAsync_1.default)(async (req, res) => {
    const file = req.file;
    const { gstApplicationId } = req.body;
    if (!file) {
        return res.status(400).json({
            success: false,
            message: "Image file not found",
            data: null,
        });
    }
    const uploaded = await fileUploader_1.fileUploader.uploadToCloudinary(file);
    const imageUrl = uploaded?.secure_url;
    if (!imageUrl) {
        return res.status(500).json({
            success: false,
            message: "Cloudinary upload failed",
            data: null,
        });
    }
    const result = await image_services_1.ImageServices.upsertImage(gstApplicationId, imageUrl);
    res.status(200).json({
        success: true,
        message: "Image uploaded successfully",
        data: result,
    });
});
const getImage = (0, catchAsync_1.default)(async (req, res) => {
    const { gstApplicationId } = req.params;
    const result = await image_services_1.ImageServices.getImage(gstApplicationId);
    if (!result) {
        return res.status(404).json({
            success: false,
            message: "Image not found",
            data: null,
        });
    }
    res.status(200).json({
        success: true,
        message: "Image fetched successfully",
        data: result,
    });
});
exports.ImageControllers = {
    upsertImage,
    getImage,
};
//# sourceMappingURL=image.controller.js.map