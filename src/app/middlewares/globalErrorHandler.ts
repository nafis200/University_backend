import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ZodError } from "zod";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode: number = httpStatus.INTERNAL_SERVER_ERROR;
    let success = false;
    let message: string = err.message || "Something went wrong!";
    let error: any = err;

    if (err instanceof Prisma.PrismaClientValidationError) {
        message = 'Prisma Validation Error';
        error = err.message;
    } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = "Duplicate Key Error";
            error = err.meta;
        }
    } else if (err instanceof ZodError) {
        statusCode = httpStatus.BAD_REQUEST;
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

export default globalErrorHandler;
