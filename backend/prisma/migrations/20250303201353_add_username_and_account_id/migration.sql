/*
  Warnings:

  - You are about to drop the column `displayName` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[unique_id]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `unique_id` to the `accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "unique_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "displayName",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "email" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "accounts_unique_id_key" ON "accounts"("unique_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
