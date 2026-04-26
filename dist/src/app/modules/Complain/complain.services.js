"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplainServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const createComplain = async (payload) => {
    const { gstApplicationId, complain } = payload;
    const user = await prisma_1.default.user.findUnique({ where: { gstApplicationId } });
    if (!user) {
        throw new ApiError_1.default(404, `User with gstApplicationId ${gstApplicationId} not found`);
    }
    const result = await prisma_1.default.complainApplication.create({
        data: {
            gstApplicationId,
            complain,
            status: true,
        },
    });
    return {
        message: "Complain created successfully!",
        data: result,
    };
};
const updateComplainStatus = async (gstApplicationId) => {
    const result = await prisma_1.default.complainApplication.updateMany({
        where: { gstApplicationId },
        data: { status: false },
    });
    return {
        message: "Complain status updated successfully!",
        data: result,
    };
};
const getComplains = async (query) => {
    const { searchTerm, status } = query;
    const result = await prisma_1.default.complainApplication.findMany({
        where: {
            status,
            ...(searchTerm && { gstApplicationId: { contains: searchTerm } }),
        },
    });
    return {
        message: "Complains fetched successfully!",
        data: result,
    };
};
exports.ComplainServices = {
    createComplain,
    updateComplainStatus,
    getComplains,
};
//# sourceMappingURL=complain.services.js.map