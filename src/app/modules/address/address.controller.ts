import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AddressServices } from "./address.services";


const upsertAddress = catchAsync(async (req: Request, res: Response) => {
  const result = await AddressServices.upsertAddress(req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Address information saved successfully!",
    data: result.data,
  });
});

export const AddressController = {
  upsertAddress,
};
