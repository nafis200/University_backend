import { Request, Response } from "express";

import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { PersonalInfoServices } from "./personalInfo.services";

const upsertPersonalInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await PersonalInfoServices.PersonalInfo(req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Personal information saved successfully!",
    data: result.data,
  });
});

export const PersonalInfoController = {
  upsertPersonalInfo,
};
