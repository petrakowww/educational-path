/*
  Warnings:

  - A unique constraint covering the columns `[token,type]` on the table `tokens` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "tokens_token_key";

-- CreateIndex
CREATE UNIQUE INDEX "tokens_token_type_key" ON "tokens"("token", "type");
