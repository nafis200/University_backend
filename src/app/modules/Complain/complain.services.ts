
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const createComplain = async (payload: { gstApplicationId: string; complain: string }) => {
  const { gstApplicationId, complain } = payload;


  const user = await prisma.user.findUnique({ where: { gstApplicationId } });
  if (!user) {
    throw new ApiError(404, `User with gstApplicationId ${gstApplicationId} not found`);
  }

  const result = await prisma.complainApplication.create({
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

const updateComplainStatus = async (gstApplicationId: string) => {
  const result = await prisma.complainApplication.updateMany({
    where: { gstApplicationId },
    data: { status: false }, 
  });

  return {
    message: "Complain status updated successfully!",
    data: result,
  };
};

const getComplains = async (query: { searchTerm?: string; status: boolean }) => {
  const { searchTerm, status } = query;

  const result = await prisma.complainApplication.findMany({
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

export const ComplainServices = {
  createComplain,
  updateComplainStatus,
  getComplains,
};
