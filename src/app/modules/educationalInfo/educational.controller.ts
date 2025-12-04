import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { EducationalServices } from "./educational.services";


const upsertEducationalInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationalServices.upsertEducationalInfo(req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Educational information saved successfully!",
    data: result.data,
  });
});

export const EducationalController = {
  upsertEducationalInfo,
};
