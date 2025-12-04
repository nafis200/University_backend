"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovedServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const upsertApproval = async (payload) => {
    const data = payload;
    const user = await prisma_1.default.user.findUnique({
        where: { gstApplicationId: data.gstApplicationId },
    });
    if (!user) {
        throw new ApiError_1.default(404, `User with gstApplicationId ${data.gstApplicationId} not found`);
    }
    const updateData = Object.fromEntries(Object.entries({
        adminApproved: data.adminApproved,
        facultyApproved: data.facultyApproved,
        deanApproved: data.deanApproved,
        registerApproved: data.registerApproved,
        hallRegisterApproved: data.hallRegisterApproved,
        status: data.status,
    }).filter(([_, value]) => value === true || value === false) // allow boolean toggle
    );
    const result = await prisma_1.default.approved.upsert({
        where: { gstApplicationId: data.gstApplicationId },
        update: updateData,
        create: {
            gstApplicationId: data.gstApplicationId,
            adminApproved: data.adminApproved ?? false,
            facultyApproved: data.facultyApproved ?? false,
            deanApproved: data.deanApproved ?? false,
            registerApproved: data.registerApproved ?? false,
            hallRegisterApproved: data.hallRegisterApproved ?? false,
            status: data.status ?? false,
        },
    });
    return {
        message: "Approval information updated successfully!",
        data: result,
    };
};
exports.ApprovedServices = {
    upsertApproval,
};
//# sourceMappingURL=approved.services.js.map