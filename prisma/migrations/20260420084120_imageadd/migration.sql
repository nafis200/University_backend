-- CreateTable
CREATE TABLE "cloudinary_images" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT 'https://i.postimg.cc/x1HDrm5X/Photo-Rashel.jpg',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cloudinary_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cloudinary_images_gstApplicationId_idx" ON "cloudinary_images"("gstApplicationId");

-- AddForeignKey
ALTER TABLE "cloudinary_images" ADD CONSTRAINT "cloudinary_images_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE CASCADE ON UPDATE CASCADE;
