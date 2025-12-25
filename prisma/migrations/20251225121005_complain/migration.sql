-- CreateTable
CREATE TABLE "ComplainApplication" (
    "id" SERIAL NOT NULL,
    "gstApplicationId" TEXT NOT NULL,
    "complain" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ComplainApplication_pkey" PRIMARY KEY ("id")
);
