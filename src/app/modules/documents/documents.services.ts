import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const upsertDocuments = async (payload: {
  gstApplicationId: string;
  sscMarksheet?: boolean;
  sscTranscript?: boolean;
  hscMarksheet?: boolean;
  hscTranscript?: boolean;
  nidCard?: boolean;
  photo?: boolean;
  gstAdmitCard?: boolean;
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

  // Update only fields that are true
  const updateData = Object.fromEntries(
    Object.entries({
      sscMarksheet: data.sscMarksheet,
      sscTranscript: data.sscTranscript,
      hscMarksheet: data.hscMarksheet,
      hscTranscript: data.hscTranscript,
      nidCard: data.nidCard,
      photo: data.photo,
      gstAdmitCard: data.gstAdmitCard,
    }).filter(([_, value]) => value === true)
  );

  const result = await prisma.document.upsert({
    where: { gstApplicationId: data.gstApplicationId },
    update: updateData,
    create: {
      gstApplicationId: data.gstApplicationId,
      sscMarksheet: data.sscMarksheet ?? false,
      sscTranscript: data.sscTranscript ?? false,
      hscMarksheet: data.hscMarksheet ?? false,
      hscTranscript: data.hscTranscript ?? false,
      nidCard: data.nidCard ?? false,
      photo: data.photo ?? false,
      gstAdmitCard: data.gstAdmitCard ?? false,
    },
  });

  return {
    message: "Document information updated successfully!",
    data: result,
  };
};

export const DocumentServices = {
  upsertDocuments,
};
