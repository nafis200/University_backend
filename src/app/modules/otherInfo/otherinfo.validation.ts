import { z } from "zod";

export const othersInfoSchema = z.object({
  gstApplicationId: z.string().min(3, "Valid gstApplicationId is required"),

  Department: z.string().min(1, "Department is required"),
  Program: z.string().min(1, "Program is required"),
  HallName: z.string().min(1, "Hall Name is required"),

  StudyBreakCause: z.string().nullable().optional(),

  AlreadyAdmittedInstitution: z.string().nullable().optional(),

  ApplicantEmployment: z.string().nullable().optional(),

  Scholarships: z.string().nullable().optional(),
});
