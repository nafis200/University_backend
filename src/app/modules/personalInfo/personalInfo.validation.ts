import { z } from "zod";

export const personalInfoSchema = z.object({
  gstApplicationId: z.string().min(3, "Valid gstApplicationId is required"),

  Name: z.string().min(3, "Student's name must be at least 3 characters"),
  NAME_BN: z.string().min(3, "বাংলা নাম লিখুন"),
  Father: z.string().min(3, "Father's name must be at least 3 characters"),
  Mother: z.string().min(3, "Mother's name must be at least 3 characters"),
  Dob: z.string().min(1, "Date of birth is required"),
  Gender: z.string().min(1, "Gender is required"),
  BloodGroup: z.string().min(1, "Blood group is required"),
  MaritalStatus: z.string().min(1, "Marital status is required"),
  Religion: z.string().min(1, "Religion is required"),
  Caste: z.string().nullable().optional(),
  Nationality: z.string().min(1, "Nationality is required"),
  PhoneNumber: z.string().min(1, "Mobile number is required"),
  Email: z.string().email("Invalid email format"),
});
