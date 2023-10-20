/*
  Warnings:

  - Made the column `empresaId` on table `Produto` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Produto` DROP FOREIGN KEY `Produto_empresaId_fkey`;

-- AlterTable
ALTER TABLE `Produto` MODIFY `empresaId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Proprietario` ADD COLUMN `colaboradoId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proprietario` ADD CONSTRAINT `Proprietario_colaboradoId_fkey` FOREIGN KEY (`colaboradoId`) REFERENCES `Proprietario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
