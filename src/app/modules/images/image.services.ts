import prisma from "../../../shared/prisma";

const upsertImage = async (gstApplicationId: string, imageUrl: string) => {
  // 1. USER EXIST CHECK (IMPORTANT FOR FOREIGN KEY)
  const user = await prisma.user.findUnique({
    where: { gstApplicationId },
  });

  if (!user) {
    throw new Error("User not found with this gstApplicationId");
  }

  // 2. UPSERT (BEST PRACTICE)
  const result = await prisma.cloudinaryImage.upsert({
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

const getImage = async (gstApplicationId: string) => {
  const result = await prisma.cloudinaryImage.findUnique({
    where: { gstApplicationId },
  });

  return result;
};

export const ImageServices = {
  upsertImage,
  getImage,
};