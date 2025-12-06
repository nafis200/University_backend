/*
  Warnings:

  - You are about to drop the column `description` on the `ExamApplication` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ExamApplication` table. All the data in the column will be lost.
  - Added the required column `unit` to the `ExamAnnouncement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamAnnouncement" ADD COLUMN     "unit" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ExamApplication" DROP COLUMN "description",
DROP COLUMN "title";
