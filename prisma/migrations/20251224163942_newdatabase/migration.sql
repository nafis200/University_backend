-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENTS', 'ADMIN', 'FACULTY', 'DEAN', 'REGISTER', 'HALL_REGISTER', 'MEDICAL');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'BLOCKED', 'DELETED');

-- CreateTable
CREATE TABLE "users" (
    "gstApplicationId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "unit" TEXT NOT NULL DEFAULT 'A',
    "faculty" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("gstApplicationId")
);

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

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "Village" TEXT,
    "PostOffice" TEXT,
    "PostCode" TEXT,
    "Thana" TEXT,
    "District" TEXT,
    "Country" TEXT,
    "NID" TEXT,
    "PresentAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educational_info" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "SSCBoard" TEXT,
    "SSCInstitution" TEXT,
    "SSCYear" TEXT,
    "SSCRoll" TEXT,
    "SSCGpa" TEXT,
    "SSCSubject" TEXT,
    "HSCBoard" TEXT,
    "HSCInstitution" TEXT,
    "HSCYear" TEXT,
    "HSCRoll" TEXT,
    "HSCGpa" TEXT,
    "HSCSubject" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "educational_info_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "approveds" (
    "id" SERIAL NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "adminApproved" BOOLEAN NOT NULL DEFAULT false,
    "facultyApproved" BOOLEAN NOT NULL DEFAULT false,
    "deanApproved" BOOLEAN NOT NULL DEFAULT false,
    "registerApproved" BOOLEAN NOT NULL DEFAULT false,
    "medicalApproved" BOOLEAN NOT NULL DEFAULT false,
    "hallRegisterApproved" BOOLEAN NOT NULL DEFAULT false,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "approveds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "sscMarksheet" BOOLEAN NOT NULL DEFAULT false,
    "sscTranscript" BOOLEAN NOT NULL DEFAULT false,
    "hscMarksheet" BOOLEAN NOT NULL DEFAULT false,
    "hscTranscript" BOOLEAN NOT NULL DEFAULT false,
    "nidCard" BOOLEAN NOT NULL DEFAULT false,
    "photo" BOOLEAN NOT NULL DEFAULT false,
    "gstAdmitCard" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsc_marks" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "BanglaLG" TEXT,
    "BanglaGP" DOUBLE PRECISION,
    "BanglaMarks" DOUBLE PRECISION,
    "EnglishLG" TEXT,
    "EnglishGP" DOUBLE PRECISION,
    "EnglishMarks" DOUBLE PRECISION,
    "PhysicsLG" TEXT,
    "PhysicsGP" DOUBLE PRECISION,
    "PhysicsMarks" DOUBLE PRECISION,
    "ChemistryLG" TEXT,
    "ChemistryGP" DOUBLE PRECISION,
    "ChemistryMarks" DOUBLE PRECISION,
    "MathLG" TEXT,
    "MathGP" DOUBLE PRECISION,
    "MathMarks" DOUBLE PRECISION,
    "BiologyLG" TEXT,
    "BiologyGP" DOUBLE PRECISION,
    "BiologyMarks" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hsc_marks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hsc_summary" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "HscExamName" TEXT,
    "HscStudyGroup" TEXT,
    "HscStudyType" TEXT,
    "HscTotalObtained" DOUBLE PRECISION,
    "HscFullMarks" DOUBLE PRECISION,
    "HscConverted1000" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hsc_summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_raw_results" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "HscMarksRaw" TEXT,
    "HscLetterGradeRaw" TEXT,
    "SscLetterGradeRaw" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "student_raw_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "omr_results" (
    "id" TEXT NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "OmrPhysics" DOUBLE PRECISION,
    "OmrChemistry" DOUBLE PRECISION,
    "OmrMath" DOUBLE PRECISION,
    "OmrBiology" DOUBLE PRECISION,
    "OmrBangla" TEXT,
    "OmrEnglish" TEXT,
    "OmrTotal" DOUBLE PRECISION,
    "OmrStatus" TEXT,
    "Position" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "omr_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "viewLink" TEXT NOT NULL,
    "downloadLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamApplication" (
    "id" TEXT NOT NULL,
    "applyStartDate" TIMESTAMP(3) NOT NULL,
    "applyEndDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExamApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DateApplication" (
    "id" SERIAL NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "applyEndDate" TIMESTAMP(3) NOT NULL DEFAULT '2025-12-24 00:00:00 +00:00',

    CONSTRAINT "DateApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamAnnouncement" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "examDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExamAnnouncement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OthersAnnouncement" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OthersAnnouncement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "personal_info_gstApplicationId_key" ON "personal_info"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "guardians_gstApplicationId_key" ON "guardians"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_gstApplicationId_key" ON "addresses"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "educational_info_gstApplicationId_key" ON "educational_info"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "others_info_gstApplicationId_key" ON "others_info"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "approveds_gstApplicationId_key" ON "approveds"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "documents_gstApplicationId_key" ON "documents"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "hsc_marks_gstApplicationId_key" ON "hsc_marks"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "hsc_summary_gstApplicationId_key" ON "hsc_summary"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "student_raw_results_gstApplicationId_key" ON "student_raw_results"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "omr_results_gstApplicationId_key" ON "omr_results"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "File_fileId_key" ON "File"("fileId");

-- CreateIndex
CREATE UNIQUE INDEX "DateApplication_gstApplicationId_key" ON "DateApplication"("gstApplicationId");

-- AddForeignKey
ALTER TABLE "personal_info" ADD CONSTRAINT "personal_info_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guardians" ADD CONSTRAINT "guardians_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "educational_info" ADD CONSTRAINT "educational_info_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "others_info" ADD CONSTRAINT "others_info_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "approveds" ADD CONSTRAINT "approveds_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsc_marks" ADD CONSTRAINT "hsc_marks_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsc_summary" ADD CONSTRAINT "hsc_summary_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_raw_results" ADD CONSTRAINT "student_raw_results_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "omr_results" ADD CONSTRAINT "omr_results_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DateApplication" ADD CONSTRAINT "DateApplication_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
