import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";

import sendResponse from "../../../shared/sendResponse";
import { DeparmtentStatusServices } from "./departmentStatus.services";

export const DepartmentControllertController = {
  getAll: catchAsync(async (_req: Request, res: Response) => {
    const data = await DeparmtentStatusServices.getAll();
    return sendResponse(res, {
      status: 200,
      success: true,
      message: "Department Status",
      data,
    });
  }),
};
