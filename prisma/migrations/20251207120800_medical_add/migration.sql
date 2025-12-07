-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'MEDICAL';

-- AlterTable
ALTER TABLE "approveds" ADD COLUMN     "medicalApproved" BOOLEAN NOT NULL DEFAULT false;
