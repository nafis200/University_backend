import { z } from "zod";

export const addressSchema = z.object({
  gstApplicationId: z.string().min(3, "Valid gstApplicationId is required"),

  Village: z.string().min(3, "Village must be at least 3 characters"),
  PostOffice: z.string().min(3, "PostOffice must be at least 3 characters"),
  PostCode: z.string().min(3, "PostCode must be at least 3 characters"),
  Thana: z.string().min(3, "Thana must be at least 3 characters"),
  District: z.string().min(3, "District must be at least 3 characters"),
  Country: z.string().min(3, "Country must be at least 3 characters"),
  NID: z.string().min(3, "NID must be at least 3 characters"),
  PresentAddress: z.string().min(3, "PresentAddress must be at least 3 characters"),
});
