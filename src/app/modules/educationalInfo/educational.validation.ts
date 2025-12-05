import { z } from "zod";

export const educationalSchema = z.object({
  gstApplicationId: z.string().min(3, "gstApplicationId must be at least 6 characters"),

  SSCBoard: z.string().min(3, "SSCBoard must be at least 3 characters"),
  SSCInstitution: z.string().min(3, "SSCInstitution must be at least 3 characters"),
  SSCYear: z.string().min(3, "SSCYear must be at least 3 characters"),
  SSCRoll: z.string().min(3, "SSCRoll must be at least 3 characters"),
  SSCGpa: z.string().min(1, "SSCGpa must be at least 3 characters"),
  SSCSubject: z.string().min(3, "SSCSubject must be at least 3 characters"),

  HSCBoard: z.string().min(3, "HSCBoard must be at least 3 characters"),
  HSCInstitution: z.string().min(3, "HSCInstitution must be at least 3 characters"),
  HSCYear: z.string().min(3, "HSCYear must be at least 3 characters"),
  HSCRoll: z.string().min(3, "HSCRoll must be at least 3 characters"),
  HSCGpa: z.string().min(1, "HSCGpa must be at least 3 characters"),
  HSCSubject: z.string().min(3, "HSCSubject must be at least 3 characters"),
});
