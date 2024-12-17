/*
  Warnings:

  - You are about to drop the column `image` on the `product` table. All the data in the column will be lost.
  - Added the required column `isAdmin` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `image`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `isAdmin` BOOLEAN NOT NULL;
