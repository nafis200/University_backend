import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { GoogleDriveServices } from "./googleDrive.service";

import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });

const uploadFile = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    return sendResponse(res, {
      status: httpStatus.BAD_REQUEST,
      success: false,
      message: "No file uploaded",
    });
  }
  const { title } = req.body;
  const result = await GoogleDriveServices.uploadToGoogleDrive(req.file, title);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "File uploaded successfully",
    data: result,
  });
});

const getFiles = catchAsync(async (req: Request, res: Response) => {
  const files = await GoogleDriveServices.getAllFiles();
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Files fetched",
    data: files,
  });
});

const deleteFile = catchAsync(async (req: Request, res: Response) => {
  const { fileId } = req.params;

  console.log(fileId)

  if (!fileId) {
    return sendResponse(res, {
      status: httpStatus.BAD_REQUEST,
      success: false,
      message: "File ID is required",
    });
  }

  await GoogleDriveServices.deleteFile(fileId);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "File deleted successfully",
  });
});

export const GoogleDriveController = {
  upload,
  uploadFile,
  getFiles,
  deleteFile,
};
