import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ApprovedServices } from "./approved.services";

const upsertApproval = catchAsync(async (req: Request, res: Response) => {
  const result = await ApprovedServices.upsertApproval(req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Approval information updated successfully!",
    data: result.data,
  });
});

export const ApprovedController = {
  upsertApproval,
};
