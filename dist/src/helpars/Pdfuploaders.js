"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdfUploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = require("cloudinary");
const config_1 = __importDefault(require("../app/config"));
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary.cloud_name,
    api_key: config_1.default.cloudinary.cloud_api_key,
    api_secret: config_1.default.cloudinary.cloud_secret_key,
});
// 📁 Local storage (temporary)
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(process.cwd(), "uploads"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage });
// 🚀 PDF upload to Cloudinary (FIXED)
const uploadPDFToCloudinary = async (file) => {
    return new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader.upload(file.path, {
            resource_type: "raw", // ✔ PDF support
            folder: "pdfs",
            type: "upload", // 🔥 IMPORTANT: makes file PUBLIC
        }, (error, result) => {
            // safe file delete
            try {
                fs_1.default.unlinkSync(file.path);
            }
            catch (e) {
                console.log("Temp file delete failed:", e);
            }
            if (error || !result) {
                return reject(error || new Error("Upload failed"));
            }
            resolve(result);
        });
    });
};
exports.pdfUploader = {
    upload,
    uploadPDFToCloudinary,
};
//# sourceMappingURL=Pdfuploaders.js.map