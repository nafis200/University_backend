import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ExamServices } from "./notice.services";
import httpStatus from "http-status";


const createExamApplication = catchAsync(async (req: Request, res: Response) => {
  const { applyStartDate, applyEndDate } = req.body;
  const data = await ExamServices.createExamApplication({
    applyStartDate: new Date(applyStartDate),
    applyEndDate: new Date(applyEndDate),
  });
  sendResponse(res, { status: 200, success: true, message: "ExamApplication created", data });
});

const getAllExamApplications = catchAsync(async (req: Request, res: Response) => {
  const data = await ExamServices.getAllExamApplications();
  sendResponse(res, { status: 200, success: true, message: "ExamApplications fetched", data });
});

const deleteExamApplication = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return sendResponse(res, {
      status: httpStatus.BAD_REQUEST,
      success: false,
      message: "File ID is required",
    });
  }
  await ExamServices.deleteExamApplication(id);
  sendResponse(res, { status: 200, success: true, message: "ExamApplication deleted" });
});


const createExamAnnouncement = catchAsync(async (req: Request, res: Response) => {
  const { title, unit, examDate } = req.body;
  const data = await ExamServices.createExamAnnouncement({
    title,
    unit,
    examDate: new Date(examDate),
  });
  sendResponse(res, { status: 200, success: true, message: "ExamAnnouncement created", data });
});

const getAllExamAnnouncements = catchAsync(async (req: Request, res: Response) => {
  const data = await ExamServices.getAllExamAnnouncements();
  sendResponse(res, { status: 200, success: true, message: "ExamAnnouncements fetched", data });
});

const deleteExamAnnouncement = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
    if (!id) {
    return sendResponse(res, {
      status: httpStatus.BAD_REQUEST,
      success: false,
      message: "File ID is required",
    });
  }
  await ExamServices.deleteExamAnnouncement(id);
  sendResponse(res, { status: 200, success: true, message: "ExamAnnouncement deleted" });
});

export const ExamController = {
  createExamApplication,
  getAllExamApplications,
  deleteExamApplication,

  createExamAnnouncement,
  getAllExamAnnouncements,
  deleteExamAnnouncement,
};
