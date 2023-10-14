-- DropForeignKey
ALTER TABLE `Produto` DROP FOREIGN KEY `Produto_funcionarioId_fkey`;

-- DropForeignKey
ALTER TABLE `Produto` DROP FOREIGN KEY `Produto_proprietarioId_fkey`;

-- AlterTable
ALTER TABLE `Produto` MODIFY `proprietarioId` VARCHAR(191) NULL,
    MODIFY `funcionarioId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_proprietarioId_fkey` FOREIGN KEY (`proprietarioId`) REFERENCES `Proprietario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
