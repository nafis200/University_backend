import { z } from "zod";

export const othersInfoSchema = z.object({
  gstApplicationId: z.string().min(6, "Valid gstApplicationId is required"),

  Department: z.string().min(1, "Department is required"),
  Program: z.string().min(1, "Program is required"),
  HallName: z.string().min(1, "Hall Name is required"),

  StudyBreakCause: z
    .string()
    .max(150, "Max 150 characters")
    .optional(),
    
  AlreadyAdmittedInstitution: z
    .string()
    .max(150, "Max 150 characters")
    .optional(),
    
  ApplicantEmployment: z
    .string()
    .max(150, "Max 150 characters")
    .optional(),
    
  Scholarships: z
    .string()
    .max(150, "Max 150 characters")
    .optional(),
});
