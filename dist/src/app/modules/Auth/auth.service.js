"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const jwtHelpers_1 = require("../../../helpars/jwtHelpers");
const config_1 = __importDefault(require("../../config"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const registerUser = async (payload) => {
    const existingUser = await prisma_1.default.user.findUnique({
        where: { gstApplicationId: payload.gstApplicationId },
    });
    if (existingUser) {
        throw new ApiError_1.default(404, "User with this GST Application ID already exists");
    }
    const defaultUnit = "A";
    const finalUnit = payload.unit || defaultUnit;
    const finalRole = payload.role || client_1.UserRole.STUDENTS;
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const newUser = await prisma_1.default.user.create({
        data: {
            gstApplicationId: payload.gstApplicationId,
            password: hashedPassword,
            unit: finalUnit,
            faculty: payload.faculty || null,
            status: client_1.UserStatus.ACTIVE,
            role: finalRole,
        },
    });
    return {
        message: "User registered successfully!",
        userId: newUser.gstApplicationId,
    };
};
const loginUser = async (payload) => {
    const userData = await prisma_1.default.user.findUniqueOrThrow({
        where: { gstApplicationId: payload.gstApplicationId },
    });
    if (userData.status !== client_1.UserStatus.ACTIVE) {
        throw new ApiError_1.default(500, `User is ${userData.status.toLowerCase()} and cannot login.`);
    }
    const isCorrectPassword = await bcrypt.compare(payload.password, userData.password);
    if (!isCorrectPassword)
        throw new Error("Password is incorrect!");
    const accessToken = jwtHelpers_1.jwtHelpers.generateToken({ gstApplicationId: userData.gstApplicationId, role: userData.role, unit: userData.unit }, config_1.default.jwt.jwt_secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.generateToken({ gstApplicationId: userData.gstApplicationId, role: userData.role, unit: userData.unit }, config_1.default.jwt.refresh_token_secret, config_1.default.jwt.refresh_token_expires_in);
    return { accessToken, refreshToken };
};
const refreshToken = async (token) => {
    let decodedData;
    try {
        decodedData = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_token_secret);
    }
    catch (err) {
        throw new ApiError_1.default(500, "You are not authorized!");
    }
    const userData = await prisma_1.default.user.findUniqueOrThrow({
        where: { gstApplicationId: decodedData.gstApplicationId },
    });
    if (userData.status !== client_1.UserStatus.ACTIVE) {
        throw new Error(`User is ${userData.status.toLowerCase()} and cannot refresh token.`);
    }
    const accessToken = jwtHelpers_1.jwtHelpers.generateToken({ gstApplicationId: userData.gstApplicationId, role: userData.role, unit: userData.unit }, config_1.default.jwt.jwt_secret, config_1.default.jwt.expires_in);
    const newRefreshToken = jwtHelpers_1.jwtHelpers.generateToken({ gstApplicationId: userData.gstApplicationId, role: userData.role }, config_1.default.jwt.refresh_token_secret, config_1.default.jwt.refresh_token_expires_in);
    return { accessToken, refreshToken: newRefreshToken };
};
const toggleUserStatus = async (gstApplicationId) => {
    const user = await prisma_1.default.user.findUniqueOrThrow({ where: { gstApplicationId } });
    const newStatus = user.status === client_1.UserStatus.ACTIVE ? client_1.UserStatus.BLOCKED : client_1.UserStatus.ACTIVE;
    const updatedUser = await prisma_1.default.user.update({
        where: { gstApplicationId },
        data: { status: newStatus },
    });
    return {
        message: `User status updated successfully!`,
        gstApplicationId: updatedUser.gstApplicationId,
        status: updatedUser.status,
    };
};
exports.AuthServices = {
    loginUser,
    refreshToken,
    registerUser,
    toggleUserStatus,
};
//# sourceMappingURL=auth.service.js.map