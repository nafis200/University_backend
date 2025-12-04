-- CreateTable
CREATE TABLE "personal_info" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "Name" TEXT,
    "NAME_BN" TEXT,
    "Father" TEXT,
    "Mother" TEXT,
    "Dob" TEXT,
    "Gender" TEXT,
    "BloodGroup" TEXT,
    "MaritalStatus" TEXT,
    "Religion" TEXT,
    "Caste" TEXT,
    "Nationality" TEXT,
    "PhoneNumber" TEXT,
    "Email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personal_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "personal_info_gstApplicationId_key" ON "personal_info"("gstApplicationId");

-- AddForeignKey
ALTER TABLE "personal_info" ADD CONSTRAINT "personal_info_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
