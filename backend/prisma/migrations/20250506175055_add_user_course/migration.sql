/*
  Warnings:

  - You are about to drop the column `edge_data` on the `TopicMap` table. All the data in the column will be lost.
  - You are about to drop the column `node_data` on the `TopicMap` table. All the data in the column will be lost.
  - You are about to drop the column `route_id` on the `TopicMap` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[routeId]` on the table `TopicMap` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `routeId` to the `TopicMap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `tokens` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CompletionType" AS ENUM ('TODO', 'MANUAL', 'NONE');

-- CreateEnum
CREATE TYPE "NodeStatus" AS ENUM ('NOT_STARTED', 'SKIPPED', 'COMPLETED', 'IN_PROGRESS');

-- DropForeignKey
ALTER TABLE "TopicMap" DROP CONSTRAINT "TopicMap_route_id_fkey";

-- AlterTable
ALTER TABLE "TopicMap" DROP COLUMN "edge_data",
DROP COLUMN "node_data",
DROP COLUMN "route_id",
ADD COLUMN     "routeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tokens" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TopicNode" (
    "id" TEXT NOT NULL,
    "topic_map_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "meta" JSONB NOT NULL,
    "completion_type" "CompletionType" NOT NULL DEFAULT 'MANUAL',
    "ui_only" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TopicNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicEdge" (
    "id" TEXT NOT NULL,
    "topicMapId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "meta" JSONB,

    CONSTRAINT "TopicEdge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCourse" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "topicMapId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "settings" JSONB,

    CONSTRAINT "UserCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTopicProgress" (
    "id" TEXT NOT NULL,
    "userCourseId" TEXT NOT NULL,
    "topicNodeId" TEXT NOT NULL,
    "status" "NodeStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "progressValue" DOUBLE PRECISION,
    "startedAt" TIMESTAMP(3),
    "finishedAt" TIMESTAMP(3),

    CONSTRAINT "UserTopicProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTopicProgress_userCourseId_topicNodeId_key" ON "UserTopicProgress"("userCourseId", "topicNodeId");

-- CreateIndex
CREATE UNIQUE INDEX "TopicMap_routeId_key" ON "TopicMap"("routeId");

-- AddForeignKey
ALTER TABLE "TopicMap" ADD CONSTRAINT "TopicMap_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicNode" ADD CONSTRAINT "TopicNode_topic_map_id_fkey" FOREIGN KEY ("topic_map_id") REFERENCES "TopicMap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicEdge" ADD CONSTRAINT "TopicEdge_topicMapId_fkey" FOREIGN KEY ("topicMapId") REFERENCES "TopicMap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCourse" ADD CONSTRAINT "UserCourse_topicMapId_fkey" FOREIGN KEY ("topicMapId") REFERENCES "TopicMap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTopicProgress" ADD CONSTRAINT "UserTopicProgress_userCourseId_fkey" FOREIGN KEY ("userCourseId") REFERENCES "UserCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTopicProgress" ADD CONSTRAINT "UserTopicProgress_topicNodeId_fkey" FOREIGN KEY ("topicNodeId") REFERENCES "TopicNode"("id") ON DELETE CASCADE ON UPDATE CASCADE;
