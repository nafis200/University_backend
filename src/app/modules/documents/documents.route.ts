import { Router } from "express";
import { DocumentController } from "./documents.controller";


const router = Router();


router.post("/documents", DocumentController.upsertDocuments);

export const DocumentsRoutes = router;
