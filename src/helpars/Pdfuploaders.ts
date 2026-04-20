import multer from "multer";
import path from "path";
import fs from "fs";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

import config from "../app/config";
import { IFile } from "../app/interfaces/file";

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name as string,
  api_key: config.cloudinary.cloud_api_key as string,
  api_secret: config.cloudinary.cloud_secret_key as string,
});


// 📁 Local storage (temporary)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


// 🚀 PDF upload to Cloudinary (FIXED)
const uploadPDFToCloudinary = async (
  file: IFile
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      {
        resource_type: "raw", // ✔ PDF support
        folder: "pdfs",
        type: "upload", // 🔥 IMPORTANT: makes file PUBLIC
      },
      (error, result) => {
        // safe file delete
        try {
          fs.unlinkSync(file.path);
        } catch (e) {
          console.log("Temp file delete failed:", e);
        }

        if (error || !result) {
          return reject(error || new Error("Upload failed"));
        }

        resolve(result);
      }
    );
  });
};

export const pdfUploader = {
  upload,
  uploadPDFToCloudinary,
};