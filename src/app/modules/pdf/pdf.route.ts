import express, { NextFunction, Request, Response } from "express";

import { AdminController } from "./pdf.controller";

const router = express.Router();

router.get("/", AdminController.generatePDF);

export const AdminRoutes = router;
