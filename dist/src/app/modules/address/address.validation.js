"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressSchema = void 0;
const zod_1 = require("zod");
exports.addressSchema = zod_1.z.object({
    gstApplicationId: zod_1.z.string().min(6, "Valid gstApplicationId is required"),
    Village: zod_1.z.string().min(3, "Village must be at least 3 characters"),
    PostOffice: zod_1.z.string().min(3, "PostOffice must be at least 3 characters"),
    PostCode: zod_1.z.string().min(3, "PostCode must be at least 3 characters"),
    Thana: zod_1.z.string().min(3, "Thana must be at least 3 characters"),
    District: zod_1.z.string().min(3, "District must be at least 3 characters"),
    Country: zod_1.z.string().min(3, "Country must be at least 3 characters"),
    NID: zod_1.z.string().min(3, "NID must be at least 3 characters"),
    PresentAddress: zod_1.z.string().min(3, "PresentAddress must be at least 3 characters"),
});
//# sourceMappingURL=address.validation.js.map