"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guardianSchema = void 0;
const zod_1 = require("zod");
exports.guardianSchema = zod_1.z.object({
    gstApplicationId: zod_1.z.string().min(3, "Valid gstApplicationId is required"),
    GuardianName: zod_1.z.string().min(3, "Guardian's name must be at least 3 characters"),
    GuardianOccupation: zod_1.z.string().min(3, "Guardian's occupation must be at least 3 characters"),
    GuardianMonthlyIncome: zod_1.z.string().min(1, "Guardian's monthly income is required"),
    GuardianRelation: zod_1.z.string().min(2, "Relation must be at least 2 characters"),
    GuardianVillage: zod_1.z.string().min(3, "Village / House / Road number is required"),
    GuardianPostOffice: zod_1.z.string().min(2, "Post office is required"),
    GuardianPostCode: zod_1.z
        .string()
        .regex(/^\d{4}$/, "Post code must be exactly 4 digits"),
    GuardianThana: zod_1.z.string().min(2, "Thana is required"),
    GuardianDistrict: zod_1.z.string().min(2, "District is required"),
    GuardianCountry: zod_1.z.string().min(2, "Country is required"),
    GuardianNID: zod_1.z
        .string()
        .regex(/^(?:\d{10}|\d{13}|\d{17}|[A-Z]{2}\d{7})$/, "Enter a valid NID, Birth Registration, or Passport number"),
    GuardianPhone: zod_1.z
        .string()
        .regex(/^(?:\+8801|01)[3-9]\d{8}$/, "Please enter a valid mobile number"),
    LegalGuardianName: zod_1.z.string().min(3, "Legal Guardian's name must be at least 3 characters"),
    LegalGuardianOccupation: zod_1.z.string().min(3, "Occupation is required"),
    LegalGuardianIncome: zod_1.z.string().min(1, "Monthly income is required"),
    LegalGuardianRelation: zod_1.z.string().min(2, "Relation must be at least 2 characters"),
    LegalGuardianVillage: zod_1.z.string().min(3, "Village / House / Road number is required"),
    LegalGuardianPostOffice: zod_1.z.string().min(2, "Post office is required"),
    LegalGuardianPostCode: zod_1.z
        .string()
        .regex(/^\d{4}$/, "Post code must be exactly 4 digits"),
    LegalGuardianThana: zod_1.z.string().min(2, "Thana is required"),
    LegalGuardianDistrict: zod_1.z.string().min(2, "District is required"),
    LegalGuardianCountry: zod_1.z.string().min(2, "Country is required"),
    LegalGuardianNID: zod_1.z
        .string()
        .regex(/^(?:\d{10}|\d{13}|\d{17}|[A-Z]{2}\d{7})$/, "Enter a valid NID, Birth Registration, or Passport number"),
    LegalGuardianPhone: zod_1.z
        .string()
        .regex(/^(?:\+8801|01)[3-9]\d{8}$/, "Please enter a valid mobile number"),
    // LocalGuardianName: z.string().min(3, "Local Guardian's name must be at least 3 characters").optional(),
    // LocalGuardianRelation: z.string().min(2, "Relation must be at least 2 characters").optional(),
    // LocalGuardianVillage: z.string().min(3, "Village / House / Road number is required").optional(),
    // LocalGuardianPostOffice: z.string().min(2, "Post office is required").optional(),
    // LocalGuardianPostCode: z.string().min(2, "Post code is required").optional(),
    // LocalGuardianThana: z.string().min(2, "Thana is required").optional(),
    // LocalGuardianDistrict: z.string().min(2, "District is required").optional(),
    // LocalGuardianCountry: z.string().min(2, "Country is required").optional(),
    // LocalGuardianNID: z.string().min(5, "NID / Birth reg. / Passport number is required").optional(),
    // LocalGuardianPhone: z.string().min(10, "Mobile number must be valid").optional(),
});
//# sourceMappingURL=gurdian.validation.js.map