"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personalInfoSchema = void 0;
const zod_1 = require("zod");
exports.personalInfoSchema = zod_1.z.object({
    gstApplicationId: zod_1.z.string().min(3, "Valid gstApplicationId is required"),
    Name: zod_1.z.string().min(3, "Student's name must be at least 3 characters"),
    NAME_BN: zod_1.z.string().min(3, "বাংলা নাম লিখুন"),
    Father: zod_1.z.string().min(3, "Father's name must be at least 3 characters"),
    Mother: zod_1.z.string().min(3, "Mother's name must be at least 3 characters"),
    Dob: zod_1.z.string().min(1, "Date of birth is required"),
    Gender: zod_1.z.string().min(1, "Gender is required"),
    BloodGroup: zod_1.z.string().min(1, "Blood group is required"),
    MaritalStatus: zod_1.z.string().min(1, "Marital status is required"),
    Religion: zod_1.z.string().min(1, "Religion is required"),
    Caste: zod_1.z.string().nullable().optional(),
    Nationality: zod_1.z.string().min(1, "Nationality is required"),
    PhoneNumber: zod_1.z.string().min(1, "Mobile number is required"),
    Email: zod_1.z.string().email("Invalid email format"),
});
//# sourceMappingURL=personalInfo.validation.js.map