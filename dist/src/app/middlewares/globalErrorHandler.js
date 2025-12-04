"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const zod_1 = require("zod");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    let success = false;
    let message = err.message || "Something went wrong!";
    let error = err;
    if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        message = 'Prisma Validation Error';
        error = err.message;
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = "Duplicate Key Error";
            error = err.meta;
        }
    }
    else if (err instanceof zod_1.ZodError) {
        statusCode = http_status_1.default.BAD_REQUEST;
        message = "Validation Error";
        error = err.issues.map(issue => ({
            path: issue.path.join('.') || 'unknown',
            message: issue,
        }));
    }
    res.status(statusCode).json({
        success,
        message,
        error
    });
};
exports.default = globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map