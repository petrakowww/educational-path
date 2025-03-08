/*
  Warnings:

  - You are about to drop the `SkillProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SkillProfile" DROP CONSTRAINT "SkillProfile_user_id_fkey";

-- DropTable
DROP TABLE "SkillProfile";

-- CreateTable
CREATE TABLE "skill_profile" (
    "id" TEXT NOT NULL,
    "headline" TEXT,
    "github_url" TEXT,
    "vk_url" TEXT,
    "telegram_url" TEXT,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "skill_profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skill_profile_user_id_key" ON "skill_profile"("user_id");

-- AddForeignKey
ALTER TABLE "skill_profile" ADD CONSTRAINT "skill_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
