import { Request, Response } from "express";
import { ImageServices } from "./image.services";
import catchAsync from "../../../shared/catchAsync";
import { fileUploader } from "../../../helpars/fileUploader";

const upsertImage = catchAsync(async (req: Request, res: Response) => {
  const file = req.file as Express.Multer.File;


  const { gstApplicationId } = req.body;

  if (!file) {
    return res.status(400).json({
      success: false,
      message: "Image file not found",
      data: null,
    });
  }

  const uploaded = await fileUploader.uploadToCloudinary(file);

  const imageUrl = uploaded?.secure_url;

  if (!imageUrl) {
    return res.status(500).json({
      success: false,
      message: "Cloudinary upload failed",
      data: null,
    });
  }

  const result = await ImageServices.upsertImage(
    gstApplicationId,
    imageUrl
  );

  res.status(200).json({
    success: true,
    message: "Image uploaded successfully",
    data: result,
  });
});

const getImage = catchAsync(async (req: Request, res: Response) => {
  const { gstApplicationId } = req.params;

  const result = await ImageServices.getImage(gstApplicationId as string);

  
  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Image not found",
      data: null,
    });
  }

  res.status(200).json({
    success: true,
    message: "Image fetched successfully",
    data: result,
  });
});

export const ImageControllers = {
  upsertImage,
  getImage,
};