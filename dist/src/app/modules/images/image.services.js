"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const upsertImage = async (gstApplicationId, imageUrl) => {
    // 1. USER EXIST CHECK (IMPORTANT FOR FOREIGN KEY)
    const user = await prisma_1.default.user.findUnique({
        where: { gstApplicationId },
    });
    if (!user) {
        throw new Error("User not found with this gstApplicationId");
    }
    // 2. UPSERT (BEST PRACTICE)
    const result = await prisma_1.default.cloudinaryImage.upsert({
        where: {
            gstApplicationId, // must be UNIQUE in schema
        },
        update: {
            imageUrl,
        },
        create: {
            gstApplicationId,
            imageUrl,
        },
    });
    return result;
};
const getImage = async (gstApplicationId) => {
    const result = await prisma_1.default.cloudinaryImage.findUnique({
        where: { gstApplicationId },
    });
    return result;
};
exports.ImageServices = {
    upsertImage,
    getImage,
};
//# sourceMappingURL=image.services.js.map