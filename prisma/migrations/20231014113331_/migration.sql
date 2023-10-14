-- AlterTable
ALTER TABLE `Funcionario` ADD COLUMN `empresaId` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
