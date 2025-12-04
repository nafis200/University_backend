import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const upsertEducationalInfo = async (payload: {
  gstApplicationId: string;

  SSCBoard?: string;
  SSCInstitution?: string;
  SSCYear?: string;
  SSCRoll?: string;
  SSCGpa?: string;
  SSCSubject?: string;

  HSCBoard?: string;
  HSCInstitution?: string;
  HSCYear?: string;
  HSCRoll?: string;
  HSCGpa?: string;
  HSCSubject?: string;
}) => {
  const data = payload;

  // Check user exists
  const user = await prisma.user.findUnique({
    where: { gstApplicationId: data.gstApplicationId },
  });

  if (!user) {
    throw new ApiError(
      404,
      `User with gstApplicationId ${data.gstApplicationId} not found`
    );
  }

  // Filter provided fields only
  const updateData = Object.fromEntries(
    Object.entries({
      SSCBoard: data.SSCBoard,
      SSCInstitution: data.SSCInstitution,
      SSCYear: data.SSCYear,
      SSCRoll: data.SSCRoll,
      SSCGpa: data.SSCGpa,
      SSCSubject: data.SSCSubject,

      HSCBoard: data.HSCBoard,
      HSCInstitution: data.HSCInstitution,
      HSCYear: data.HSCYear,
      HSCRoll: data.HSCRoll,
      HSCGpa: data.HSCGpa,
      HSCSubject: data.HSCSubject,
    }).filter(([_, value]) => value !== undefined)
  );

  const result = await prisma.educationalInfo.upsert({
    where: { gstApplicationId: data.gstApplicationId },
    update: updateData,
    create: {
      gstApplicationId: data.gstApplicationId,

      SSCBoard: data.SSCBoard ?? null,
      SSCInstitution: data.SSCInstitution ?? null,
      SSCYear: data.SSCYear ?? null,
      SSCRoll: data.SSCRoll ?? null,
      SSCGpa: data.SSCGpa ?? null,
      SSCSubject: data.SSCSubject ?? null,

      HSCBoard: data.HSCBoard ?? null,
      HSCInstitution: data.HSCInstitution ?? null,
      HSCYear: data.HSCYear ?? null,
      HSCRoll: data.HSCRoll ?? null,
      HSCGpa: data.HSCGpa ?? null,
      HSCSubject: data.HSCSubject ?? null,
    },
  });

  return {
    message: "Educational information saved successfully!",
    data: result,
  };
};

export const EducationalServices = {
  upsertEducationalInfo,
};
