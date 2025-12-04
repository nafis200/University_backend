import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const upsertOthersInfo = async (payload: {
  gstApplicationId: string;

  Department?: string;
  Program?: string;
  HallName?: string;
  StudyBreakCause?: string;
  AlreadyAdmittedInstitution?: string;
  ApplicantEmployment?: string;
  Scholarships?: string;
}) => {
  const data = payload;

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: { gstApplicationId: data.gstApplicationId },
  });

  if (!user) {
    throw new ApiError(
      404,
      `User with gstApplicationId ${data.gstApplicationId} not found`
    );
  }

  // Filter only provided fields
  const updateData = Object.fromEntries(
    Object.entries({
      Department: data.Department,
      Program: data.Program,
      HallName: data.HallName,
      StudyBreakCause: data.StudyBreakCause,
      AlreadyAdmittedInstitution: data.AlreadyAdmittedInstitution,
      ApplicantEmployment: data.ApplicantEmployment,
      Scholarships: data.Scholarships,
    }).filter(([_, value]) => value !== undefined)
  );

  const result = await prisma.othersInfo.upsert({
    where: { gstApplicationId: data.gstApplicationId },
    update: updateData,
    create: {
      gstApplicationId: data.gstApplicationId,
      Department: data.Department ?? null,
      Program: data.Program ?? null,
      HallName: data.HallName ?? null,
      StudyBreakCause: data.StudyBreakCause ?? null,
      AlreadyAdmittedInstitution: data.AlreadyAdmittedInstitution ?? null,
      ApplicantEmployment: data.ApplicantEmployment ?? null,
      Scholarships: data.Scholarships ?? null,
    },
  });

  return {
    message: "Others information saved successfully!",
    data: result,
  };
};

export const OthersInfoServices = {
  upsertOthersInfo,
};
