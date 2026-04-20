/*
  Warnings:

  - A unique constraint covering the columns `[gstApplicationId]` on the table `cloudinary_images` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cloudinary_images_gstApplicationId_key" ON "cloudinary_images"("gstApplicationId");
