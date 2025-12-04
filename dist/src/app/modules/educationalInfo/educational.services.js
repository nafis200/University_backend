"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationalServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const upsertEducationalInfo = async (payload) => {
    const data = payload;
    // Check user exists
    const user = await prisma_1.default.user.findUnique({
        where: { gstApplicationId: data.gstApplicationId },
    });
    if (!user) {
        throw new ApiError_1.default(404, `User with gstApplicationId ${data.gstApplicationId} not found`);
    }
    // Filter provided fields only
    const updateData = Object.fromEntries(Object.entries({
        SSCBoard: data.SSCBoard,
        SSCInstitution: data.SSCInstitution,
        SSCYear: data.SSCYear,
        SSCRoll: data.SSCRoll,
        SSCGpa: data.SSCGpa,
        SSCSubject: data.SSCSubject,
        HSCBoard: data.HSCBoard,
        HSCInstitution: data.HSCInstitution,
        HSCYear: data.HSCYear,
        HSCRoll: data.HSCRoll,
        HSCGpa: data.HSCGpa,
        HSCSubject: data.HSCSubject,
    }).filter(([_, value]) => value !== undefined));
    const result = await prisma_1.default.educationalInfo.upsert({
        where: { gstApplicationId: data.gstApplicationId },
        update: updateData,
        create: {
            gstApplicationId: data.gstApplicationId,
            SSCBoard: data.SSCBoard ?? null,
            SSCInstitution: data.SSCInstitution ?? null,
            SSCYear: data.SSCYear ?? null,
            SSCRoll: data.SSCRoll ?? null,
            SSCGpa: data.SSCGpa ?? null,
            SSCSubject: data.SSCSubject ?? null,
            HSCBoard: data.HSCBoard ?? null,
            HSCInstitution: data.HSCInstitution ?? null,
            HSCYear: data.HSCYear ?? null,
            HSCRoll: data.HSCRoll ?? null,
            HSCGpa: data.HSCGpa ?? null,
            HSCSubject: data.HSCSubject ?? null,
        },
    });
    return {
        message: "Educational information saved successfully!",
        data: result,
    };
};
exports.EducationalServices = {
    upsertEducationalInfo,
};
//# sourceMappingURL=educational.services.js.map