import express, { NextFunction, Request, Response } from "express";
import { generatePDF } from "./pdf.controller";


const router = express.Router();

router.get("/", generatePDF);

export const PdfRoutes = router;
