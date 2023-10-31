/*
  Warnings:

  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Produto` DROP FOREIGN KEY `Produto_categoriaId_fkey`;

-- DropTable
DROP TABLE `Categoria`;

-- CreateTable
CREATE TABLE `Grupo` (
    `id` VARCHAR(191) NOT NULL,
    `categoria_nome` VARCHAR(191) NOT NULL,
    `familiaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Familia` (
    `id` VARCHAR(191) NOT NULL,
    `familia_nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Grupo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grupo` ADD CONSTRAINT `Grupo_familiaId_fkey` FOREIGN KEY (`familiaId`) REFERENCES `Familia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
