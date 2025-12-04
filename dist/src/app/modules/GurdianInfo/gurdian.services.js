"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const Guardian = async (payload) => {
    const data = payload;
    const user = await prisma_1.default.user.findUnique({
        where: { gstApplicationId: data.gstApplicationId },
    });
    if (!user) {
        throw new ApiError_1.default(404, `User with gstApplicationId ${data.gstApplicationId} not found`);
    }
    const updateData = Object.fromEntries(Object.entries({
        GuardianName: data.GuardianName ?? null,
        GuardianOccupation: data.GuardianOccupation ?? null,
        GuardianMonthlyIncome: data.GuardianMonthlyIncome ?? null,
        GuardianRelation: data.GuardianRelation ?? null,
        GuardianVillage: data.GuardianVillage ?? null,
        GuardianPostOffice: data.GuardianPostOffice ?? null,
        GuardianPostCode: data.GuardianPostCode ?? null,
        GuardianThana: data.GuardianThana ?? null,
        GuardianDistrict: data.GuardianDistrict ?? null,
        GuardianCountry: data.GuardianCountry ?? null,
        GuardianNID: data.GuardianNID ?? null,
        GuardianPhone: data.GuardianPhone ?? null,
        LegalGuardianName: data.LegalGuardianName ?? null,
        LegalGuardianOccupation: data.LegalGuardianOccupation ?? null,
        LegalGuardianIncome: data.LegalGuardianIncome ?? null,
        LegalGuardianRelation: data.LegalGuardianRelation ?? null,
        LegalGuardianVillage: data.LegalGuardianVillage ?? null,
        LegalGuardianPostOffice: data.LegalGuardianPostOffice ?? null,
        LegalGuardianPostCode: data.LegalGuardianPostCode ?? null,
        LegalGuardianThana: data.LegalGuardianThana ?? null,
        LegalGuardianDistrict: data.LegalGuardianDistrict ?? null,
        LegalGuardianCountry: data.LegalGuardianCountry ?? null,
        LegalGuardianNID: data.LegalGuardianNID ?? null,
        LegalGuardianPhone: data.LegalGuardianPhone ?? null,
        LocalGuardianName: data.LocalGuardianName ?? null,
        LocalGuardianRelation: data.LocalGuardianRelation ?? null,
        LocalGuardianVillage: data.LocalGuardianVillage ?? null,
        LocalGuardianPostOffice: data.LocalGuardianPostOffice ?? null,
        LocalGuardianPostCode: data.LocalGuardianPostCode ?? null,
        LocalGuardianThana: data.LocalGuardianThana ?? null,
        LocalGuardianDistrict: data.LocalGuardianDistrict ?? null,
        LocalGuardianCountry: data.LocalGuardianCountry ?? null,
        LocalGuardianNID: data.LocalGuardianNID ?? null,
        LocalGuardianPhone: data.LocalGuardianPhone ?? null,
    }).filter(([_, value]) => value !== undefined));
    const result = await prisma_1.default.guardian.upsert({
        where: { gstApplicationId: data.gstApplicationId },
        update: updateData,
        create: {
            gstApplicationId: data.gstApplicationId,
            ...updateData,
        },
    });
    return {
        message: "Guardian information saved successfully!",
        data: result,
    };
};
exports.GuardianServices = {
    Guardian,
};
//# sourceMappingURL=gurdian.services.js.map