import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const upsertApproval = async (payload: {
  gstApplicationId: string;
  adminApproved?: boolean;
  facultyApproved?: boolean;
  deanApproved?: boolean;
  registerApproved?: boolean;
  hallRegisterApproved?: boolean;
  status?: boolean;
}) => {
  const data = payload;

  
  const user = await prisma.user.findUnique({
    where: { gstApplicationId: data.gstApplicationId },
  });

  if (!user) {
    throw new ApiError(
      404,
      `User with gstApplicationId ${data.gstApplicationId} not found`
    );
  }

  


  const updateData = Object.fromEntries(
    Object.entries({
      adminApproved: data.adminApproved,
      facultyApproved: data.facultyApproved,
      deanApproved: data.deanApproved,
      registerApproved: data.registerApproved,
      hallRegisterApproved: data.hallRegisterApproved,
      status: data.status,
    }).filter(([_, value]) => value === true || value === false) // allow boolean toggle
  );

  const result = await prisma.approved.upsert({
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

export const ApprovedServices = {
  upsertApproval,
};
