import { Router } from "express";
import multer from "multer";
import { GoogleDriveController } from "./googleDrive.controller";


const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload-file", upload.single("file"), GoogleDriveController.uploadFile);

export const GoogleDriveRoutes = router;
