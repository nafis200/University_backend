import { z } from "zod";
export declare const personalInfoSchema: z.ZodObject<{
    gstApplicationId: z.ZodString;
    Name: z.ZodString;
    NAME_BN: z.ZodString;
    Father: z.ZodString;
    Mother: z.ZodString;
    Dob: z.ZodString;
    Gender: z.ZodString;
    BloodGroup: z.ZodString;
    MaritalStatus: z.ZodString;
    Religion: z.ZodString;
    Caste: z.ZodString;
    Nationality: z.ZodString;
    PhoneNumber: z.ZodString;
    Email: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=personalInfo.validation.d.ts.map