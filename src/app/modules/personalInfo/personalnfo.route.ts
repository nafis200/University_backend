import { Router } from "express";
import { PersonalInfoController } from "./personalInfo.controller";
import { personalInfoSchema } from "./personalInfo.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = Router();


router.post("/personalInfo",validateRequest(personalInfoSchema), PersonalInfoController.upsertPersonalInfo);

export const PersonalInfoRoutes = router;


