import { Request, Response } from "express";
import multer from "multer";
export declare const GoogleDriveController: {
    upload: multer.Multer;
    uploadFile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getFiles: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteFile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=googleDrive.controller.d.ts.map