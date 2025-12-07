"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OthersAnnouncementServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
exports.OthersAnnouncementServices = {
    async create(payload) {
        return prisma_1.default.othersAnnouncement.create({
            data: {
                title: payload.title,
                date: new Date(payload.date),
            },
        });
    },
    async getAll() {
        return prisma_1.default.othersAnnouncement.findMany({
            orderBy: { createdAt: "desc" },
        });
    },
    async delete(id) {
        return prisma_1.default.othersAnnouncement.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=OtherNotice.services.js.map