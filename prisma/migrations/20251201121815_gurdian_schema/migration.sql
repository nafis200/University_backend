-- CreateTable
CREATE TABLE "guardians" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "GuardianName" TEXT,
    "GuardianOccupation" TEXT,
    "GuardianMonthlyIncome" TEXT,
    "GuardianRelation" TEXT,
    "GuardianVillage" TEXT,
    "GuardianPostOffice" TEXT,
    "GuardianPostCode" TEXT,
    "GuardianThana" TEXT,
    "GuardianDistrict" TEXT,
    "GuardianCountry" TEXT,
    "GuardianNID" TEXT,
    "GuardianPhone" TEXT,
    "LegalGuardianName" TEXT,
    "LegalGuardianOccupation" TEXT,
    "LegalGuardianIncome" TEXT,
    "LegalGuardianRelation" TEXT,
    "LegalGuardianVillage" TEXT,
    "LegalGuardianPostOffice" TEXT,
    "LegalGuardianPostCode" TEXT,
    "LegalGuardianThana" TEXT,
    "LegalGuardianDistrict" TEXT,
    "LegalGuardianCountry" TEXT,
    "LegalGuardianNID" TEXT,
    "LegalGuardianPhone" TEXT,
    "LocalGuardianName" TEXT,
    "LocalGuardianRelation" TEXT,
    "LocalGuardianVillage" TEXT,
    "LocalGuardianPostOffice" TEXT,
    "LocalGuardianPostCode" TEXT,
    "LocalGuardianThana" TEXT,
    "LocalGuardianDistrict" TEXT,
    "LocalGuardianCountry" TEXT,
    "LocalGuardianNID" TEXT,
    "LocalGuardianPhone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "guardians_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "guardians_gstApplicationId_key" ON "guardians"("gstApplicationId");

-- AddForeignKey
ALTER TABLE "guardians" ADD CONSTRAINT "guardians_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
