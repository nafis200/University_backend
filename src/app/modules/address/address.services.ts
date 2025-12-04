import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";

const upsertAddress = async (payload: {
  gstApplicationId: string;

  Village?: string;
  PostOffice?: string;
  PostCode?: string;
  Thana?: string;
  District?: string;
  Country?: string;
  NID?: string;
  PresentAddress?: string;
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

  // Filter only provided fields
  const updateData = Object.fromEntries(
    Object.entries({
      Village: data.Village,
      PostOffice: data.PostOffice,
      PostCode: data.PostCode,
      Thana: data.Thana,
      District: data.District,
      Country: data.Country,
      NID: data.NID,
      PresentAddress: data.PresentAddress,
    }).filter(([_, value]) => value !== undefined)
  );

  const result = await prisma.address.upsert({
    where: { gstApplicationId: data.gstApplicationId },
    update: updateData,
    create: {
      gstApplicationId: data.gstApplicationId,
      Village: data.Village ?? null,
      PostOffice: data.PostOffice ?? null,
      PostCode: data.PostCode ?? null,
      Thana: data.Thana ?? null,
      District: data.District ?? null,
      Country: data.Country ?? null,
      NID: data.NID ?? null,
      PresentAddress: data.PresentAddress ?? null,
    },
  });

  return {
    message: "Address info saved successfully!",
    data: result,
  };
};

export const AddressServices = {
  upsertAddress,
};
