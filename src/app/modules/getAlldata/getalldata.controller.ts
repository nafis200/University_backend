import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { UserServices } from "./getalldata.services";

export const getUsersByUnit = catchAsync(
  async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    const decodedUser = req.user;
    

    const {
      searchTerm,
      department,
      notDepartment,
      page,
      limit,
      adminApproved,
      facultyApproved,
      deanApproved,
      registerApproved,
      hallRegisterApproved,
      role,   
      unit,     
      excludeRole, 
    } = req.query;

    const users = await UserServices.getUsersWithFilters(
      {
        searchTerm: searchTerm as string,
        department: department as string,
        notDepartment: notDepartment as string,
        unit: unit as string,
        adminApproved: adminApproved as string | boolean,
        facultyApproved: facultyApproved as string | boolean,
        deanApproved: deanApproved as string | boolean,
        registerApproved: registerApproved as string | boolean,
        hallRegisterApproved: hallRegisterApproved as string | boolean,
        role: role as string,
        excludeRole: excludeRole as string,
      },
      {
        page: page ? Number(page) : 1,
        limit: limit ? Number(limit) : 100,
      }
    );

    sendResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: `Users fetched for unit ${unit}`,
      data: users,
    });
  }
);

