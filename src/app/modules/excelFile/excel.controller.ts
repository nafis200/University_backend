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

  const result = await ExcelService.uploadExcelFile(file);

  return sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Excel file uploaded and processed successfully',
    data: result,
  });
});

export const FileController = {
  uploadFile,
};
