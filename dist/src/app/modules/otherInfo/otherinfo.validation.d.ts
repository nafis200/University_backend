import { z } from "zod";
export declare const othersInfoSchema: z.ZodObject<{
    gstApplicationId: z.ZodString;
    Department: z.ZodString;
    Program: z.ZodString;
    HallName: z.ZodString;
    StudyBreakCause: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    AlreadyAdmittedInstitution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ApplicantEmployment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    Scholarships: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
//# sourceMappingURL=otherinfo.validation.d.ts.map