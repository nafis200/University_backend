import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";
import { guardianSchema } from "./gurdian.validation";
import { GuardianController } from "./gurdianInfo.controller";

const router = Router();


router.post(
  "/guardian",
  validateRequest(guardianSchema),
  GuardianController.upsertGuardian
);

export const GuardianRoutes = router;
