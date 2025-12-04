import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const upsertDocuments = async (payload: {
  gstApplicationId: string;
  sscMarksheet?: boolean;
  sscTranscript?: boolean;
  hscMarksheet?: boolean;
  hscTranscript?: boolean;
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
      sscMarksheet: data.sscMarksheet,
      sscTranscript: data.sscTranscript,
      hscMarksheet: data.hscMarksheet,
      hscTranscript: data.hscTranscript,
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
