import express from "express";
import { OthersAnnouncementController } from "./OtherNotice.controller";


const router = express.Router();

router.post("/", OthersAnnouncementController.create);
router.get("/", OthersAnnouncementController.getAll);
router.delete("/:id", OthersAnnouncementController.delete);

export const OthersAnnouncementRoutes = router;
