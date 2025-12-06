import { Router } from "express";
import { ExamController } from "./notice.controller";


const router = Router();


router.post("/exam-application", ExamController.createExamApplication);
router.get("/exam-application", ExamController.getAllExamApplications);
router.delete("/exam-application/:id", ExamController.deleteExamApplication);


router.post("/exam-announcement", ExamController.createExamAnnouncement);
router.get("/exam-announcement", ExamController.getAllExamAnnouncements);
router.delete("/exam-announcement/:id", ExamController.deleteExamAnnouncement);

export const ExamRoutes = router;
