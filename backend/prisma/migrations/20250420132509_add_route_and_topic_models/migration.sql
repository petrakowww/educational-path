-- CreateEnum
CREATE TYPE "PrivateType" AS ENUM ('GENERAL', 'PRIVATE');

-- CreateTable
CREATE TABLE "Route" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "private_type" "PrivateType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RouteTag" (
    "id" TEXT NOT NULL,
    "route_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    CONSTRAINT "RouteTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicNode" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "route_id" TEXT NOT NULL,

    CONSTRAINT "TopicNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicEdge" (
    "id" TEXT NOT NULL,
    "from_id" TEXT NOT NULL,
    "to_id" TEXT NOT NULL,

    CONSTRAINT "TopicEdge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- AddForeignKey
ALTER TABLE "Route" ADD CONSTRAINT "Route_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteTag" ADD CONSTRAINT "RouteTag_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteTag" ADD CONSTRAINT "RouteTag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicNode" ADD CONSTRAINT "TopicNode_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "Route"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicEdge" ADD CONSTRAINT "TopicEdge_from_id_fkey" FOREIGN KEY ("from_id") REFERENCES "TopicNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicEdge" ADD CONSTRAINT "TopicEdge_to_id_fkey" FOREIGN KEY ("to_id") REFERENCES "TopicNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
