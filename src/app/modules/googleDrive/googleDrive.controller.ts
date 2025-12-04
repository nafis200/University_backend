import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

import multer from "multer";
import { GoogleDriveServices } from "./googleDrive.service";


const upload = multer({ storage: multer.memoryStorage() });


const uploadFile = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    return sendResponse(res, {
      status: httpStatus.BAD_REQUEST,
      success: false,
      message: "No file uploaded",
    });
  }

  const result = await GoogleDriveServices.uploadToGoogleDrive(req.file);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "File uploaded successfully",
    data: result,
  });
});

export const GoogleDriveController = {
  upload,
  uploadFile,
};
