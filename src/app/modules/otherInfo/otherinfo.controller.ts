import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OthersInfoServices } from "./otherinfo.services";


const upsertOthersInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await OthersInfoServices.upsertOthersInfo(req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Others information saved successfully!",
    data: result.data,
  });
});
const RoleUpdatedInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await OthersInfoServices.upsertOthersInfo(req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Role updated SuccessFully!",
    data: result.data,
  });
});

export const OthersInfoController = {
  upsertOthersInfo,
  RoleUpdatedInfo
};
