import { Router } from "express";
import { ApprovedController } from "./approved.controller";

const router = Router();


router.post("/approved", ApprovedController.upsertApproval);

export const ApprovedRoutes = router;
