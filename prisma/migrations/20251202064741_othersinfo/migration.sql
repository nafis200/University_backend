-- CreateTable
CREATE TABLE "others_info" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "Department" TEXT,
    "Program" TEXT,
    "HallName" TEXT,
    "StudyBreakCause" TEXT,
    "AlreadyAdmittedInstitution" TEXT,
    "ApplicantEmployment" TEXT,
    "Scholarships" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "others_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "others_info_gstApplicationId_key" ON "others_info"("gstApplicationId");

-- AddForeignKey
ALTER TABLE "others_info" ADD CONSTRAINT "others_info_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
