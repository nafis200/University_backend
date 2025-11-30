-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENTS', 'ADMIN', 'FACULTY', 'DEAN', 'REGISTER', 'HALL_REGISTER');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'BLOCKED', 'DELETED');

-- CreateTable
CREATE TABLE "users" (
    "gstApplicationId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "unit" TEXT NOT NULL DEFAULT 'default unit',
    "faculty" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("gstApplicationId")
);
