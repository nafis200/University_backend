import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OthersAnnouncementServices } from "./OtherNotice.services";

export const OthersAnnouncementController = {
  create: catchAsync(async (req: Request, res: Response) => {
    const data = await OthersAnnouncementServices.create(req.body);

    return sendResponse(res, {
      status: 200,
      success: true,
      message: "Others Announcement created",
      data,
    });
  }),

  getAll: catchAsync(async (_req: Request, res: Response) => {
    const data = await OthersAnnouncementServices.getAll();

    return sendResponse(res, {
      status: 200,
      success: true,
      message: "Others Announcements fetched",
      data,
    });
  }),

  delete: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      return sendResponse(res, {
        status: 400,
        success: false,
        message: "ID is required",
      });
    }

    const data = await OthersAnnouncementServices.delete(id);

    return sendResponse(res, {
      status: 200,
      success: true,
      message: "Others Announcement deleted",
      data,
    });
  }),
};
