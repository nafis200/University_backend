import { Router } from "express";
import { GetAllDataController } from "./getalldata.controller";


const router = Router();

router.get("/fetch", GetAllDataController.getUsersByUnit);

export const AllDataRoutes = router;
