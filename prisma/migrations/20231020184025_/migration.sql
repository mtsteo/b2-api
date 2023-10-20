/*
  Warnings:

  - You are about to drop the column `colaboradoId` on the `Proprietario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Proprietario` DROP FOREIGN KEY `Proprietario_colaboradoId_fkey`;

-- AlterTable
ALTER TABLE `Proprietario` DROP COLUMN `colaboradoId`,
    ADD COLUMN `autorizanteId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `Proprietario_colaboradoId_fkey` ON `Proprietario`(`autorizanteId`);

-- AddForeignKey
ALTER TABLE `Proprietario` ADD CONSTRAINT `Proprietario_autorizanteId_fkey` FOREIGN KEY (`autorizanteId`) REFERENCES `Proprietario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
