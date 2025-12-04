-- CreateTable
CREATE TABLE "approveds" (
    "id" SERIAL NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "adminApproved" BOOLEAN NOT NULL DEFAULT false,
    "facultyApproved" BOOLEAN NOT NULL DEFAULT false,
    "deanApproved" BOOLEAN NOT NULL DEFAULT false,
    "registerApproved" BOOLEAN NOT NULL DEFAULT false,
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

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "approveds_gstApplicationId_key" ON "approveds"("gstApplicationId");

-- CreateIndex
CREATE UNIQUE INDEX "documents_gstApplicationId_key" ON "documents"("gstApplicationId");

-- AddForeignKey
ALTER TABLE "approveds" ADD CONSTRAINT "approveds_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_gstApplicationId_fkey" FOREIGN KEY ("gstApplicationId") REFERENCES "users"("gstApplicationId") ON DELETE RESTRICT ON UPDATE CASCADE;
