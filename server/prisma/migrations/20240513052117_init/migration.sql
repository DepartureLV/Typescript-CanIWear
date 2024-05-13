/*
  Warnings:

  - You are about to drop the `Credential` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Credential" DROP CONSTRAINT "Credential_userId_fkey";

-- DropTable
DROP TABLE "Credential";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "tops" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "maxtemp_resistant" INTEGER NOT NULL,
    "mintemp_resistant" INTEGER NOT NULL,
    "wind_resistant" INTEGER NOT NULL,
    "rain_resistant" INTEGER NOT NULL,
    "snow_resistant" INTEGER NOT NULL,
    "heat_resistant" INTEGER NOT NULL,
    "uv_resistant" INTEGER NOT NULL,

    CONSTRAINT "tops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bottoms" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "maxtemp_resistant" INTEGER NOT NULL,
    "mintemp_resistant" INTEGER NOT NULL,
    "wind_resistant" INTEGER NOT NULL,
    "rain_resistant" INTEGER NOT NULL,
    "snow_resistant" INTEGER NOT NULL,
    "heat_resistant" INTEGER NOT NULL,
    "uv_resistant" INTEGER NOT NULL,

    CONSTRAINT "bottoms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dresses" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "maxtemp_resistant" INTEGER NOT NULL,
    "mintemp_resistant" INTEGER NOT NULL,
    "wind_resistant" INTEGER NOT NULL,
    "rain_resistant" INTEGER NOT NULL,
    "snow_resistant" INTEGER NOT NULL,
    "heat_resistant" INTEGER NOT NULL,
    "uv_resistant" INTEGER NOT NULL,

    CONSTRAINT "dresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "outerwear" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "maxtemp_resistant" INTEGER NOT NULL,
    "mintemp_resistant" INTEGER NOT NULL,
    "wind_resistant" INTEGER NOT NULL,
    "rain_resistant" INTEGER NOT NULL,
    "snow_resistant" INTEGER NOT NULL,
    "heat_resistant" INTEGER NOT NULL,
    "uv_resistant" INTEGER NOT NULL,

    CONSTRAINT "outerwear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activewear" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "maxtemp_resistant" INTEGER NOT NULL,
    "mintemp_resistant" INTEGER NOT NULL,
    "wind_resistant" INTEGER NOT NULL,
    "rain_resistant" INTEGER NOT NULL,
    "snow_resistant" INTEGER NOT NULL,
    "heat_resistant" INTEGER NOT NULL,
    "uv_resistant" INTEGER NOT NULL,

    CONSTRAINT "activewear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accessories" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "maxtemp_resistant" INTEGER NOT NULL,
    "mintemp_resistant" INTEGER NOT NULL,
    "wind_resistant" INTEGER NOT NULL,
    "rain_resistant" INTEGER NOT NULL,
    "snow_resistant" INTEGER NOT NULL,
    "heat_resistant" INTEGER NOT NULL,
    "uv_resistant" INTEGER NOT NULL,

    CONSTRAINT "accessories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "footwear" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "maxtemp_resistant" INTEGER NOT NULL,
    "mintemp_resistant" INTEGER NOT NULL,
    "wind_resistant" INTEGER NOT NULL,
    "rain_resistant" INTEGER NOT NULL,
    "snow_resistant" INTEGER NOT NULL,
    "heat_resistant" INTEGER NOT NULL,
    "uv_resistant" INTEGER NOT NULL,

    CONSTRAINT "footwear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "others" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "maxtemp_resistant" INTEGER NOT NULL,
    "mintemp_resistant" INTEGER NOT NULL,
    "wind_resistant" INTEGER NOT NULL,
    "rain_resistant" INTEGER NOT NULL,
    "snow_resistant" INTEGER NOT NULL,
    "heat_resistant" INTEGER NOT NULL,
    "uv_resistant" INTEGER NOT NULL,

    CONSTRAINT "others_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tops_itemName_key" ON "tops"("itemName");

-- CreateIndex
CREATE UNIQUE INDEX "bottoms_itemName_key" ON "bottoms"("itemName");

-- CreateIndex
CREATE UNIQUE INDEX "dresses_itemName_key" ON "dresses"("itemName");

-- CreateIndex
CREATE UNIQUE INDEX "outerwear_itemName_key" ON "outerwear"("itemName");

-- CreateIndex
CREATE UNIQUE INDEX "activewear_itemName_key" ON "activewear"("itemName");

-- CreateIndex
CREATE UNIQUE INDEX "accessories_itemName_key" ON "accessories"("itemName");

-- CreateIndex
CREATE UNIQUE INDEX "footwear_itemName_key" ON "footwear"("itemName");

-- CreateIndex
CREATE UNIQUE INDEX "others_itemName_key" ON "others"("itemName");
