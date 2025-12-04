"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const upsertDocuments = async (payload) => {
    const data = payload;
    const user = await prisma_1.default.user.findUnique({
        where: { gstApplicationId: data.gstApplicationId },
    });
    if (!user) {
        throw new ApiError_1.default(404, `User with gstApplicationId ${data.gstApplicationId} not found`);
    }
    const updateData = Object.fromEntries(Object.entries({
        sscMarksheet: data.sscMarksheet,
        sscTranscript: data.sscTranscript,
        hscMarksheet: data.hscMarksheet,
        hscTranscript: data.hscTranscript,
    }).filter(([_, value]) => value === true));
    const result = await prisma_1.default.document.upsert({
        where: { gstApplicationId: data.gstApplicationId },
        update: updateData,
        create: {
            gstApplicationId: data.gstApplicationId,
            sscMarksheet: data.sscMarksheet ?? false,
            sscTranscript: data.sscTranscript ?? false,
            hscMarksheet: data.hscMarksheet ?? false,
            hscTranscript: data.hscTranscript ?? false,
        },
    });
    return {
        message: "Document information updated successfully!",
        data: result,
    };
};
exports.DocumentServices = {
    upsertDocuments,
};
//# sourceMappingURL=documents.services.js.map