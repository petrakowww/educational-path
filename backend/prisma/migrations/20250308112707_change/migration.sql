/*
  Warnings:

  - You are about to drop the column `profilename` on the `skill_profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profile_name]` on the table `skill_profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "skill_profile_profilename_key";

-- AlterTable
ALTER TABLE "skill_profile" DROP COLUMN "profilename",
ADD COLUMN     "profile_name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "skill_profile_profile_name_key" ON "skill_profile"("profile_name");
