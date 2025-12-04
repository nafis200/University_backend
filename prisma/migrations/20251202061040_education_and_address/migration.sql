-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "Village" TEXT NOT NULL,
    "PostOffice" TEXT NOT NULL,
    "PostCode" TEXT NOT NULL,
    "Thana" TEXT NOT NULL,
    "District" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "NID" TEXT NOT NULL,
    "PresentAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educational_info" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "SSCBoard" TEXT NOT NULL,
    "SSCInstitution" TEXT NOT NULL,
    "SSCYear" TEXT NOT NULL,
    "SSCRoll" TEXT NOT NULL,
    "SSCGpa" TEXT NOT NULL,
    "SSCSubject" TEXT NOT NULL,
    "HSCBoard" TEXT NOT NULL,
    "HSCInstitution" TEXT NOT NULL,
    "HSCYear" TEXT NOT NULL,
    "HSCRoll" TEXT NOT NULL,
    "HSCGpa" TEXT NOT NULL,
    "HSCSubject" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "educational_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "addresses_gstApplicationId_key" ON "addresses"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "educational_info_gstApplicationId_key" ON "educational_info"("gstApplicationId");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "educational_info" ADD CONSTRAINT "educational_info_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
