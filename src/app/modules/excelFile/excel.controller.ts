import type { Request, Response } from 'express';
import { z } from 'zod';

import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ExcelService } from './excel.services';


const fileValidationSchema = z.object({
  mimetype: z.enum([
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ]),
});

const uploadFile = catchAsync(async (req: Request, res: Response) => {
  const file = req.file;
  const { applyEndDate } = req.body;


  if (!file) {
    return sendResponse(res, {
      status: httpStatus.BAD_REQUEST,
      success: false,
      message: 'No file uploaded!',
    });
  }

 
  const validation = fileValidationSchema.safeParse({ mimetype: file.mimetype });
  if (!validation.success) {
    return sendResponse(res, {
      status: httpStatus.BAD_REQUEST,
      success: false,
      message: 'Invalid file type! Only Excel files are allowed.',
    });
  }

  const result = await ExcelService.uploadExcelFile(file,applyEndDate);

  return sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Excel file uploaded and processed successfully',
    data: result,
  });
});


const getDateApplication = catchAsync(async (req: Request, res: Response) => {
  const { gstApplicationId } = req.params;

  if (!gstApplicationId) {
    return sendResponse(res, {
      status: 400,
      success: false,
      message: "gstApplicationId is required",
    });
  }

  const data = await ExcelService.getDateApplicationByGstApplicationId(gstApplicationId);

  if (!data) {
    return sendResponse(res, {
      status: 404,
      success: false,
      message: "DateApplication not found",
    });
  }

  sendResponse(res, {
    status: 200,
    success: true,
    message: "DateApplication fetched successfully",
    data,
  });
});


const updateDateApplication = catchAsync(async (req: Request, res: Response) => {
  const { gstApplicationId } = req.params;
  const { applyEndDate } = req.body;

  if (!gstApplicationId || !applyEndDate) {
    return sendResponse(res, {
      status: 400,
      success: false,
      message: "gstApplicationId and applyEndDate are required",
    });
  }

  const data = await ExcelService.updateDateApplicationByGstApplicationId(
    gstApplicationId,
    { applyEndDate: new Date(applyEndDate) }
  );

  sendResponse(res, {
    status: 200,
    success: true,
    message: "DateApplication updated successfully",
    data,
  });
});
const updateDateStatus = catchAsync(async (req: Request, res: Response) => {
  const { gstApplicationId } = req.params;
  

  if (!gstApplicationId) {
    return sendResponse(res, {
      status: 400,
      success: false,
      message: "gstApplicationId and applyEndDate are required",
    });
  }

  const data = await ExcelService.updateDateApplicationStatus(
    gstApplicationId,
  );

  sendResponse(res, {
    status: 200,
    success: true,
    message: "DateApplication updated successfully",
    data,
  });
});

export const FileController = {
  uploadFile,
  getDateApplication,
  updateDateApplication,
  updateDateStatus
};
