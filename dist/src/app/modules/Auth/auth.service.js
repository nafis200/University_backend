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
const prisma_1 = require("../../../shared/prisma");
const jwtHelpers_1 = require("../../../helpars/jwtHelpers");
const config_1 = __importDefault(require("../../config"));
const registerUser = async (payload) => {
    const defaultUnit = "all";
    const finalUnit = payload.unit || defaultUnit;
    const finalRole = payload.role || client_1.UserRole.STUDENTS;
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const newUser = await prisma_1.prisma.user.create({
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
    const userData = await prisma_1.prisma.user.findUniqueOrThrow({
        where: {
            gstApplicationId: payload.gstApplicationId,
            status: client_1.UserStatus.ACTIVE,
        },
    });
    const isCorrectPassword = await bcrypt.compare(payload.password, userData.password);
    if (!isCorrectPassword)
        throw new Error("Password is incorrect!");
    const accessToken = jwtHelpers_1.jwtHelpers.generateToken({
        gstApplicationId: userData.gstApplicationId,
        role: userData.role,
    }, config_1.default.jwt.jwt_secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.generateToken({
        gstApplicationId: userData.gstApplicationId,
        role: userData.role,
    }, config_1.default.jwt.refresh_token_secret, config_1.default.jwt.refresh_token_expires_in);
    return {
        accessToken,
        refreshToken,
    };
};
const refreshToken = async (token) => {
    let decodedData;
    try {
        decodedData = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_token_secret);
    }
    catch (err) {
        throw new Error("You are not authorized!");
    }
    const userData = await prisma_1.prisma.user.findUniqueOrThrow({
        where: {
            gstApplicationId: decodedData.gstApplicationId,
            status: client_1.UserStatus.ACTIVE,
        },
    });
    const accessToken = jwtHelpers_1.jwtHelpers.generateToken({
        gstApplicationId: userData.gstApplicationId,
        role: userData.role,
    }, config_1.default.jwt.jwt_secret, config_1.default.jwt.expires_in);
    const newRefreshToken = jwtHelpers_1.jwtHelpers.generateToken({
        gstApplicationId: userData.gstApplicationId,
        role: userData.role,
    }, config_1.default.jwt.refresh_token_secret, config_1.default.jwt.refresh_token_expires_in);
    return {
        accessToken,
        refreshToken: newRefreshToken,
    };
};
exports.AuthServices = {
    loginUser,
    refreshToken,
    registerUser
};
//# sourceMappingURL=auth.service.js.map