"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamRoutes = void 0;
const express_1 = require("express");
const notice_controller_1 = require("./notice.controller");
const router = (0, express_1.Router)();
router.post("/exam-application", notice_controller_1.ExamController.createExamApplication);
router.get("/exam-application", notice_controller_1.ExamController.getAllExamApplications);
router.delete("/exam-application/:id", notice_controller_1.ExamController.deleteExamApplication);
router.post("/exam-announcement", notice_controller_1.ExamController.createExamAnnouncement);
router.get("/exam-announcement", notice_controller_1.ExamController.getAllExamAnnouncements);
router.delete("/exam-announcement/:id", notice_controller_1.ExamController.deleteExamAnnouncement);
exports.ExamRoutes = router;
//# sourceMappingURL=notices.route.js.map