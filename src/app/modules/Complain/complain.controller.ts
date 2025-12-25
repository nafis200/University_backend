
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ComplainServices } from "./complain.services";

const createComplain = catchAsync(async (req: Request, res: Response) => {
  const result = await ComplainServices.createComplain(req.body);
  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: result.message,
    data: result.data,
  });
});

const updateComplainStatus = catchAsync(async (req: Request, res: Response) => {
  const { gstApplicationId } = req.params;
  const result = await ComplainServices.updateComplainStatus(gstApplicationId as string);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: result.message,
    data: result.data,
  });
});

const getComplains = catchAsync(async (req: Request, res: Response) => {
  const { searchTerm, status } = req.query;
  const result = await ComplainServices.getComplains({
    searchTerm: searchTerm as string,
    status: status === "true",
  });
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: result.message,
    data: result.data,
  });
});

export const ComplainController = {
  createComplain,
  updateComplainStatus,
  getComplains,
};
