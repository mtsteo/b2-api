/*
  Warnings:

  - You are about to drop the column `cidade` on the `Endereco` table. All the data in the column will be lost.
  - Added the required column `cidadeId` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Endereco` DROP COLUMN `cidade`,
    ADD COLUMN `cidadeId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Cidade` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_cidadeId_fkey` FOREIGN KEY (`cidadeId`) REFERENCES `Cidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
