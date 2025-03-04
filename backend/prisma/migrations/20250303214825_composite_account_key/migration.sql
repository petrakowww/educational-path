/*
  Warnings:

  - A unique constraint covering the columns `[unique_id,provider]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "accounts_unique_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "accounts_unique_id_provider_key" ON "accounts"("unique_id", "provider");
