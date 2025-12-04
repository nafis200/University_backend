import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const Guardian = async (payload: {
  gstApplicationId: string;

  GuardianName?: string;
  GuardianOccupation?: string;
  GuardianMonthlyIncome?: string;
  GuardianRelation?: string;
  GuardianVillage?: string;
  GuardianPostOffice?: string;
  GuardianPostCode?: string;
  GuardianThana?: string;
  GuardianDistrict?: string;
  GuardianCountry?: string;
  GuardianNID?: string;
  GuardianPhone?: string;

  LegalGuardianName?: string;
  LegalGuardianOccupation?: string;
  LegalGuardianIncome?: string;
  LegalGuardianRelation?: string;
  LegalGuardianVillage?: string;
  LegalGuardianPostOffice?: string;
  LegalGuardianPostCode?: string;
  LegalGuardianThana?: string;
  LegalGuardianDistrict?: string;
  LegalGuardianCountry?: string;
  LegalGuardianNID?: string;
  LegalGuardianPhone?: string;

  LocalGuardianName?: string;
  LocalGuardianRelation?: string;
  LocalGuardianVillage?: string;
  LocalGuardianPostOffice?: string;
  LocalGuardianPostCode?: string;
  LocalGuardianThana?: string;
  LocalGuardianDistrict?: string;
  LocalGuardianCountry?: string;
  LocalGuardianNID?: string;
  LocalGuardianPhone?: string;
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
    }).filter(([_, value]) => value !== undefined)
  );

  const result = await prisma.guardian.upsert({
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

export const GuardianServices = {
  Guardian,
};
