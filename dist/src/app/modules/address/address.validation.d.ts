import { z } from "zod";
export declare const addressSchema: z.ZodObject<{
    gstApplicationId: z.ZodString;
    Village: z.ZodString;
    PostOffice: z.ZodString;
    PostCode: z.ZodString;
    Thana: z.ZodString;
    District: z.ZodString;
    Country: z.ZodString;
    NID: z.ZodString;
    PresentAddress: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=address.validation.d.ts.map