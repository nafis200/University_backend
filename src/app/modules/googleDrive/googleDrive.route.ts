import { Router } from "express";
import { GoogleDriveController } from "./googleDrive.controller";
import multer from "multer";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload-file", upload.single("file"), GoogleDriveController.uploadFile);
router.get("/files", GoogleDriveController.getFiles);
router.delete("/delete-file/:fileId", GoogleDriveController.deleteFile);

export const GoogleDriveRoutes = router;
