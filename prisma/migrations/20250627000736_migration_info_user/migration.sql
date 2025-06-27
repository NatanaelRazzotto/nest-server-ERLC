/*
  Warnings:

  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idDiscord]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idDiscord` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "user_email_key";

-- AlterTable
ALTER TABLE "person" ADD COLUMN     "url_image" TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "email",
ADD COLUMN     "idDiscord" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "vehicle_yard_registration" ALTER COLUMN "release_date" SET DEFAULT (NOW() + INTERVAL '1 day');

-- CreateIndex
CREATE UNIQUE INDEX "user_idDiscord_key" ON "user"("idDiscord");
