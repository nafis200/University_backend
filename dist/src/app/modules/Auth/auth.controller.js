"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const config_1 = __importDefault(require("../../config"));
const registerUser = (0, catchAsync_1.default)(async (req, res) => {
    const result = await auth_service_1.AuthServices.registerUser(req.body);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "User registered successfully!",
        data: result,
    });
});
const loginUser = (0, catchAsync_1.default)(async (req, res) => {
    const result = await auth_service_1.AuthServices.loginUser(req.body);
    const { refreshToken } = result;
    res.cookie("refreshToken", refreshToken, {
        secure: config_1.default.NODE_ENV === "production",
        httpOnly: true,
    });
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Logged in successfully!",
        data: {
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
        },
    });
});
const refreshToken = (0, catchAsync_1.default)(async (req, res) => {
    const { refreshToken } = req.cookies;
    const result = await auth_service_1.AuthServices.refreshToken(refreshToken);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: "Access token genereated successfully!",
        data: {
            accessToken: result.accessToken,
        },
    });
});
const toggleUserStatus = (0, catchAsync_1.default)(async (req, res) => {
    const { gstApplicationId } = req.body;
    if (!gstApplicationId) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "gstApplicationId is required in request body",
        });
    }
    const result = await auth_service_1.AuthServices.toggleUserStatus(gstApplicationId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: `User status updated successfully!`,
        data: result,
    });
});
exports.AuthController = {
    loginUser,
    refreshToken,
    registerUser,
    toggleUserStatus,
};
//# sourceMappingURL=auth.controller.js.map