/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `Tariff` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tariff_type_key" ON "Tariff"("type");
