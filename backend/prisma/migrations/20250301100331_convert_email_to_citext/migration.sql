-- This is an empty migration.

CREATE EXTENSION IF NOT EXISTS citext;
ALTER TABLE "users" ALTER COLUMN "email" TYPE CITEXT;
