import express, { NextFunction, Request, Response } from "express";
import { generatePDF } from "./pdf.controller";

const router = express.Router();

// router.get("/", generatePDF);
router.post("/pdfreader", generatePDF);

router.post("/nafis", (req, res) => {
  console.log(req.body);
  return res.status(200).json({
    success: true,
    message: "Data received successfully!",
    receivedData: req.body,
  });
});

export const PdfRoutes = router;
