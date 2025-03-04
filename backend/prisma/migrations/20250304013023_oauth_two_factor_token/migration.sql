/*
  Warnings:

  - A unique constraint covering the columns `[oauth_token]` on the table `tokens` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tokens" ADD COLUMN     "oauth_token" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "tokens_oauth_token_key" ON "tokens"("oauth_token");
