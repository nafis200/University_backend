"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OthersInfoServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const upsertOthersInfo = async (payload) => {
    const data = payload;
    // Check if user exists
    const user = await prisma_1.default.user.findUnique({
        where: { gstApplicationId: data.gstApplicationId },
    });
    if (!user) {
        throw new ApiError_1.default(404, `User with gstApplicationId ${data.gstApplicationId} not found`);
    }
    // Filter only provided fields
    const updateData = Object.fromEntries(Object.entries({
        Department: data.Department,
        Program: data.Program,
        HallName: data.HallName,
        StudyBreakCause: data.StudyBreakCause,
        AlreadyAdmittedInstitution: data.AlreadyAdmittedInstitution,
        ApplicantEmployment: data.ApplicantEmployment,
        Scholarships: data.Scholarships,
    }).filter(([_, value]) => value !== undefined));
    const result = await prisma_1.default.othersInfo.upsert({
        where: { gstApplicationId: data.gstApplicationId },
        update: updateData,
        create: {
            gstApplicationId: data.gstApplicationId,
            Department: data.Department ?? null,
            Program: data.Program ?? null,
            HallName: data.HallName ?? null,
            StudyBreakCause: data.StudyBreakCause ?? null,
            AlreadyAdmittedInstitution: data.AlreadyAdmittedInstitution ?? null,
            ApplicantEmployment: data.ApplicantEmployment ?? null,
            Scholarships: data.Scholarships ?? null,
        },
    });
    return {
        message: "Others information saved successfully!",
        data: result,
    };
};
exports.OthersInfoServices = {
    upsertOthersInfo,
};
//# sourceMappingURL=otherinfo.services.js.map