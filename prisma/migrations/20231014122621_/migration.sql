-- DropForeignKey
ALTER TABLE `Produto` DROP FOREIGN KEY `Produto_empresaId_fkey`;

-- AlterTable
ALTER TABLE `Produto` MODIFY `empresaId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
