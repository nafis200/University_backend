import { Request, Response } from "express";

import { AuthServices } from "./auth.service";

import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import config from "../../config";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.registerUser(req.body);
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User registered successfully!",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.loginUser(req.body);

  const { refreshToken } = result;

  res.cookie("refreshToken", refreshToken, {
    secure: config.NODE_ENV === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Logged in successfully!",
    data: {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    },
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await AuthServices.refreshToken(refreshToken);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Access token genereated successfully!",
    data: {
      accessToken: result.accessToken,
    },
  });
});

const toggleUserStatus = catchAsync(async (req: Request, res: Response) => {
  const { gstApplicationId } = req.body;

  if (!gstApplicationId) {
    return sendResponse(res, {
      status: httpStatus.BAD_REQUEST,
      success: false,
      message: "gstApplicationId is required in request body",
    });
  }

  const result = await AuthServices.toggleUserStatus(gstApplicationId);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: `User status updated successfully!`,
    data: result,
  });
});

export const AuthController = {
  loginUser,
  refreshToken,
  registerUser,
  toggleUserStatus,
};
