/*
  Warnings:

  - You are about to drop the column `username` on the `skill_profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profilename]` on the table `skill_profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "skill_profile_username_key";

-- AlterTable
ALTER TABLE "skill_profile" DROP COLUMN "username",
ADD COLUMN     "profilename" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "skill_profile_profilename_key" ON "skill_profile"("profilename");
