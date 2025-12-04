import { Router } from "express";
import { EducationalController } from "./educational.controller";
import { educationalSchema } from "./educational.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/educational",
  validateRequest(educationalSchema),
  EducationalController.upsertEducationalInfo
);

export const EducationalRoutes = router;
