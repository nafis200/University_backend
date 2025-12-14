import { z } from "zod";

export const guardianSchema = z.object({
  gstApplicationId: z.string().min(3, "Valid gstApplicationId is required"),

  GuardianName: z.string().min(3, "Guardian's name must be at least 3 characters"),
  GuardianOccupation: z.string().min(3, "Guardian's occupation must be at least 3 characters"),
  GuardianMonthlyIncome: z.string().min(1, "Guardian's monthly income is required"),
  GuardianRelation: z.string().min(2, "Relation must be at least 2 characters"),
  GuardianVillage: z.string().min(3, "Village / House / Road number is required"),
  GuardianPostOffice: z.string().min(2, "Post office is required"),
  GuardianPostCode: z
  .string()
  .regex(/^\d{4}$/, "Post code must be exactly 4 digits"),
  GuardianThana: z.string().min(2, "Thana is required"),
  GuardianDistrict: z.string().min(2, "District is required"),
  GuardianCountry: z.string().min(2, "Country is required"),
  GuardianNID: z
  .string()
  .regex(
    /^(?:\d{10}|\d{13}|\d{17}|[A-Z]{2}\d{7})$/,
    "Enter a valid NID, Birth Registration, or Passport number"
  ),
  GuardianPhone:  z
  .string()
  .regex(
    /^(?:\+8801|01)[3-9]\d{8}$/,
    "Please enter a valid mobile number"
  ),
  LegalGuardianName: z.string().min(3, "Legal Guardian's name must be at least 3 characters"),
  LegalGuardianOccupation: z.string().min(3, "Occupation is required"),
  LegalGuardianIncome: z.string().min(1, "Monthly income is required"),
  LegalGuardianRelation: z.string().min(2, "Relation must be at least 2 characters"),
  LegalGuardianVillage: z.string().min(3, "Village / House / Road number is required"),
  LegalGuardianPostOffice: z.string().min(2, "Post office is required"),
  LegalGuardianPostCode:z
  .string()
  .regex(/^\d{4}$/, "Post code must be exactly 4 digits"),
  LegalGuardianThana: z.string().min(2, "Thana is required"),
  LegalGuardianDistrict: z.string().min(2, "District is required"),
  LegalGuardianCountry: z.string().min(2, "Country is required"),
  LegalGuardianNID: z
  .string()
  .regex(
    /^(?:\d{10}|\d{13}|\d{17}|[A-Z]{2}\d{7})$/,
    "Enter a valid NID, Birth Registration, or Passport number"
  ),
  LegalGuardianPhone:  z
  .string()
  .regex(
    /^(?:\+8801|01)[3-9]\d{8}$/,
    "Please enter a valid mobile number"
  ),

  LocalGuardianName: z.string().min(3, "Local Guardian's name must be at least 3 characters").optional(),
  LocalGuardianRelation: z.string().min(2, "Relation must be at least 2 characters").optional(),
  LocalGuardianVillage: z.string().min(3, "Village / House / Road number is required").optional(),
  LocalGuardianPostOffice: z.string().min(2, "Post office is required").optional(),
  LocalGuardianPostCode: z.string().min(2, "Post code is required").optional(),
  LocalGuardianThana: z.string().min(2, "Thana is required").optional(),
  LocalGuardianDistrict: z.string().min(2, "District is required").optional(),
  LocalGuardianCountry: z.string().min(2, "Country is required").optional(),
  LocalGuardianNID: z.string().min(5, "NID / Birth reg. / Passport number is required").optional(),
  LocalGuardianPhone: z.string().min(10, "Mobile number must be valid").optional(),
});
