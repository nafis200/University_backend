import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";
import { othersInfoSchema } from "./otherinfo.validation";
import { OthersInfoController } from "./otherinfo.controller";

const router = Router();

router.post(
  "/othersInfo",
  validateRequest(othersInfoSchema),
  OthersInfoController.upsertOthersInfo
);

export const OthersInfoRoutes = router;
