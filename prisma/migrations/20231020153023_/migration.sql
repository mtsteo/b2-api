/*
  Warnings:

  - You are about to drop the column `colaboradorId` on the `Produto` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Produto_colaboradorId_fkey` ON `Produto`;

-- AlterTable
ALTER TABLE `Produto` DROP COLUMN `colaboradorId`;
