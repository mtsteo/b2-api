/*
  Warnings:

  - You are about to drop the column `uf` on the `Endereco` table. All the data in the column will be lost.
  - You are about to drop the `Familia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Grupo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `estadoId` to the `Cidade` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Grupo` DROP FOREIGN KEY `Grupo_familiaId_fkey`;

-- DropForeignKey
ALTER TABLE `Produto` DROP FOREIGN KEY `Produto_categoriaId_fkey`;

-- AlterTable
ALTER TABLE `Cidade` ADD COLUMN `estadoId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Endereco` DROP COLUMN `uf`;

-- AlterTable
ALTER TABLE `Produto` MODIFY `categoriaId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Familia`;

-- DropTable
DROP TABLE `Grupo`;

-- CreateTable
CREATE TABLE `Estado` (
    `id` VARCHAR(191) NOT NULL,
    `estado_nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` VARCHAR(191) NOT NULL,
    `categoria_nome` VARCHAR(191) NOT NULL,
    `sub_1_Id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sub_1` (
    `id` VARCHAR(191) NOT NULL,
    `nome_sub1` VARCHAR(191) NOT NULL,
    `sub_2_Id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sub_2` (
    `id` VARCHAR(191) NOT NULL,
    `nome_sub2` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cidade` ADD CONSTRAINT `Cidade_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `Estado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Categoria` ADD CONSTRAINT `Categoria_sub_1_Id_fkey` FOREIGN KEY (`sub_1_Id`) REFERENCES `Sub_1`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sub_1` ADD CONSTRAINT `Sub_1_sub_2_Id_fkey` FOREIGN KEY (`sub_2_Id`) REFERENCES `Sub_2`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
