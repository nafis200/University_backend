import { z } from "zod";
export declare const othersInfoSchema: z.ZodObject<{
    gstApplicationId: z.ZodString;
    Department: z.ZodString;
    Program: z.ZodString;
    HallName: z.ZodString;
    StudyBreakCause: z.ZodOptional<z.ZodString>;
    AlreadyAdmittedInstitution: z.ZodOptional<z.ZodString>;
    ApplicantEmployment: z.ZodOptional<z.ZodString>;
    Scholarships: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=otherinfo.validation.d.ts.map