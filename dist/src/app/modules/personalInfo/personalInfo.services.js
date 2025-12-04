"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalInfoServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const PersonalInfo = async (payload) => {
    const data = payload;
    const user = await prisma_1.default.user.findUnique({
        where: { gstApplicationId: data.gstApplicationId },
    });
    if (!user) {
        throw new ApiError_1.default(404, `User with gstApplicationId ${data.gstApplicationId} not found`);
    }
    const updateData = Object.fromEntries(Object.entries({
        Name: data.Name,
        NAME_BN: data.NAME_BN,
        Father: data.Father,
        Mother: data.Mother,
        Dob: data.Dob,
        Gender: data.Gender,
        BloodGroup: data.BloodGroup,
        MaritalStatus: data.MaritalStatus,
        Religion: data.Religion,
        Caste: data.Caste,
        Nationality: data.Nationality,
        PhoneNumber: data.PhoneNumber,
        Email: data.Email,
    }).filter(([_, value]) => value !== undefined));
    const result = await prisma_1.default.personalInfo.upsert({
        where: { gstApplicationId: data.gstApplicationId },
        update: updateData,
        create: {
            gstApplicationId: data.gstApplicationId,
            Name: data.Name ?? null,
            NAME_BN: data.NAME_BN ?? null,
            Father: data.Father ?? null,
            Mother: data.Mother ?? null,
            Dob: data.Dob ?? null,
            Gender: data.Gender ?? null,
            BloodGroup: data.BloodGroup ?? null,
            MaritalStatus: data.MaritalStatus ?? null,
            Religion: data.Religion ?? null,
            Caste: data.Caste ?? null,
            Nationality: data.Nationality ?? null,
            PhoneNumber: data.PhoneNumber ?? null,
            Email: data.Email ?? null,
        },
    });
    return {
        message: "Personal information saved successfully!",
        data: result,
    };
};
exports.PersonalInfoServices = {
    PersonalInfo,
};
//# sourceMappingURL=personalInfo.services.js.map