"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationalSchema = void 0;
const zod_1 = require("zod");
exports.educationalSchema = zod_1.z.object({
    gstApplicationId: zod_1.z.string().min(6, "gstApplicationId must be at least 6 characters"),
    SSCBoard: zod_1.z.string().min(3, "SSCBoard must be at least 3 characters"),
    SSCInstitution: zod_1.z.string().min(3, "SSCInstitution must be at least 3 characters"),
    SSCYear: zod_1.z.string().min(3, "SSCYear must be at least 3 characters"),
    SSCRoll: zod_1.z.string().min(3, "SSCRoll must be at least 3 characters"),
    SSCGpa: zod_1.z.string().min(3, "SSCGpa must be at least 3 characters"),
    SSCSubject: zod_1.z.string().min(3, "SSCSubject must be at least 3 characters"),
    HSCBoard: zod_1.z.string().min(3, "HSCBoard must be at least 3 characters"),
    HSCInstitution: zod_1.z.string().min(3, "HSCInstitution must be at least 3 characters"),
    HSCYear: zod_1.z.string().min(3, "HSCYear must be at least 3 characters"),
    HSCRoll: zod_1.z.string().min(3, "HSCRoll must be at least 3 characters"),
    HSCGpa: zod_1.z.string().min(3, "HSCGpa must be at least 3 characters"),
    HSCSubject: zod_1.z.string().min(3, "HSCSubject must be at least 3 characters"),
});
//# sourceMappingURL=educational.validation.js.map