"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const upsertAddress = async (payload) => {
    const data = payload;
    // Check user exists
    const user = await prisma_1.default.user.findUnique({
        where: { gstApplicationId: data.gstApplicationId },
    });
    if (!user) {
        throw new ApiError_1.default(404, `User with gstApplicationId ${data.gstApplicationId} not found`);
    }
    // Filter only provided fields
    const updateData = Object.fromEntries(Object.entries({
        Village: data.Village,
        PostOffice: data.PostOffice,
        PostCode: data.PostCode,
        Thana: data.Thana,
        District: data.District,
        Country: data.Country,
        NID: data.NID,
        PresentAddress: data.PresentAddress,
    }).filter(([_, value]) => value !== undefined));
    const result = await prisma_1.default.address.upsert({
        where: { gstApplicationId: data.gstApplicationId },
        update: updateData,
        create: {
            gstApplicationId: data.gstApplicationId,
            Village: data.Village ?? null,
            PostOffice: data.PostOffice ?? null,
            PostCode: data.PostCode ?? null,
            Thana: data.Thana ?? null,
            District: data.District ?? null,
            Country: data.Country ?? null,
            NID: data.NID ?? null,
            PresentAddress: data.PresentAddress ?? null,
        },
    });
    return {
        message: "Address info saved successfully!",
        data: result,
    };
};
exports.AddressServices = {
    upsertAddress,
};
//# sourceMappingURL=address.services.js.map