"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
exports.ExamServices = {
    createExamApplication: async (data) => {
        return await prisma_1.default.examApplication.create({ data });
    },
    getAllExamApplications: async () => {
        return await prisma_1.default.examApplication.findMany({ orderBy: { createdAt: "desc" } });
    },
    deleteExamApplication: async (id) => {
        return await prisma_1.default.examApplication.delete({ where: { id } });
    },
    createExamAnnouncement: async (data) => {
        return await prisma_1.default.examAnnouncement.create({ data });
    },
    getAllExamAnnouncements: async () => {
        return await prisma_1.default.examAnnouncement.findMany({ orderBy: { createdAt: "desc" } });
    },
    deleteExamAnnouncement: async (id) => {
        return await prisma_1.default.examAnnouncement.delete({ where: { id } });
    },
};
//# sourceMappingURL=notice.services.js.map