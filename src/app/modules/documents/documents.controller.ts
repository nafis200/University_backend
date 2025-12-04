import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { DocumentServices } from "./documents.services";


const upsertDocuments = catchAsync(async (req: Request, res: Response) => {
  const result = await DocumentServices.upsertDocuments(req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Document information updated successfully!",
    data: result.data,
  });
});

export const DocumentController = {
  upsertDocuments,
};
