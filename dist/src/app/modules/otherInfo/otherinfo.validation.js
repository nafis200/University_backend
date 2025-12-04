"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.othersInfoSchema = void 0;
const zod_1 = require("zod");
exports.othersInfoSchema = zod_1.z.object({
    gstApplicationId: zod_1.z.string().min(6, "Valid gstApplicationId is required"),
    Department: zod_1.z.string().min(1, "Department is required"),
    Program: zod_1.z.string().min(1, "Program is required"),
    HallName: zod_1.z.string().min(1, "Hall Name is required"),
    StudyBreakCause: zod_1.z
        .string()
        .max(150, "Max 150 characters")
        .optional(),
    AlreadyAdmittedInstitution: zod_1.z
        .string()
        .max(150, "Max 150 characters")
        .optional(),
    ApplicantEmployment: zod_1.z
        .string()
        .max(150, "Max 150 characters")
        .optional(),
    Scholarships: zod_1.z
        .string()
        .max(150, "Max 150 characters")
        .optional(),
});
//# sourceMappingURL=otherinfo.validation.js.map