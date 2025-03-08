/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `skill_profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "skill_profile" ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "skill_profile_username_key" ON "skill_profile"("username");
