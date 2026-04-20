import express from "express";

import { ImageControllers } from "./image.controller";
import { fileUploader } from "../../../helpars/fileUploader";

const router = express.Router();

router.post(
  "/",
  fileUploader.upload.single("image"),
  ImageControllers.upsertImage
);

router.get(
  "/:gstApplicationId",
  ImageControllers.getImage
);

export const ImageRouter = router;