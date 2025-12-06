"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const notice_services_1 = require("./notice.services");
const http_status_1 = __importDefault(require("http-status"));
const createExamApplication = (0, catchAsync_1.default)(async (req, res) => {
    const { applyStartDate, applyEndDate } = req.body;
    const data = await notice_services_1.ExamServices.createExamApplication({
        applyStartDate: new Date(applyStartDate),
        applyEndDate: new Date(applyEndDate),
    });
    (0, sendResponse_1.default)(res, { status: 200, success: true, message: "ExamApplication created", data });
});
const getAllExamApplications = (0, catchAsync_1.default)(async (req, res) => {
    const data = await notice_services_1.ExamServices.getAllExamApplications();
    (0, sendResponse_1.default)(res, { status: 200, success: true, message: "ExamApplications fetched", data });
});
const deleteExamApplication = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "File ID is required",
        });
    }
    await notice_services_1.ExamServices.deleteExamApplication(id);
    (0, sendResponse_1.default)(res, { status: 200, success: true, message: "ExamApplication deleted" });
});
const createExamAnnouncement = (0, catchAsync_1.default)(async (req, res) => {
    const { title, unit, examDate } = req.body;
    const data = await notice_services_1.ExamServices.createExamAnnouncement({
        title,
        unit,
        examDate: new Date(examDate),
    });
    (0, sendResponse_1.default)(res, { status: 200, success: true, message: "ExamAnnouncement created", data });
});
const getAllExamAnnouncements = (0, catchAsync_1.default)(async (req, res) => {
    const data = await notice_services_1.ExamServices.getAllExamAnnouncements();
    (0, sendResponse_1.default)(res, { status: 200, success: true, message: "ExamAnnouncements fetched", data });
});
const deleteExamAnnouncement = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return (0, sendResponse_1.default)(res, {
            status: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "File ID is required",
        });
    }
    await notice_services_1.ExamServices.deleteExamAnnouncement(id);
    (0, sendResponse_1.default)(res, { status: 200, success: true, message: "ExamAnnouncement deleted" });
});
exports.ExamController = {
    createExamApplication,
    getAllExamApplications,
    deleteExamApplication,
    createExamAnnouncement,
    getAllExamAnnouncements,
    deleteExamAnnouncement,
};
//# sourceMappingURL=notice.controller.js.map