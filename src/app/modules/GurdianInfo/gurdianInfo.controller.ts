import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { GuardianServices } from "./gurdian.services";


const upsertGuardian = catchAsync(async (req: Request, res: Response) => {
  const result = await GuardianServices.Guardian(req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Guardian information saved successfully!",
    data: result.data,
  });
});

export const GuardianController = {
  upsertGuardian,
};
