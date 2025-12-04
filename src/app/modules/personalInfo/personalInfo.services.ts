import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const PersonalInfo = async (payload: {
  gstApplicationId: string;

  Name?: string;
  NAME_BN?: string;
  Father?: string;
  Mother?: string;
  Dob?: string;
  Gender?: string;
  BloodGroup?: string;
  MaritalStatus?: string;
  Religion?: string;
  Caste?: string;
  Nationality?: string;
  PhoneNumber?: string;
  Email?: string;
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
    }).filter(([_, value]) => value !== undefined)
  );

  const result = await prisma.personalInfo.upsert({
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

export const PersonalInfoServices = {
  PersonalInfo,
};
