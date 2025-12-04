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

-- CreateIndex
CREATE UNIQUE INDEX "hsc_marks_gstApplicationId_key" ON "hsc_marks"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "hsc_summary_gstApplicationId_key" ON "hsc_summary"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "student_raw_results_gstApplicationId_key" ON "student_raw_results"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "omr_results_gstApplicationId_key" ON "omr_results"("gstApplicationId");

-- AddForeignKey
ALTER TABLE "hsc_marks" ADD CONSTRAINT "hsc_marks_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hsc_summary" ADD CONSTRAINT "hsc_summary_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_raw_results" ADD CONSTRAINT "student_raw_results_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "omr_results" ADD CONSTRAINT "omr_results_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
