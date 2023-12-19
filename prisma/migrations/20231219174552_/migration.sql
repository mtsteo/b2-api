/*
  Warnings:

  - Added the required column `tipo` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Produto` DROP FOREIGN KEY `Produto_empresaId_fkey`;

-- AlterTable
ALTER TABLE `Endereco` ADD COLUMN `tipo` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Produto` MODIFY `empresaId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
