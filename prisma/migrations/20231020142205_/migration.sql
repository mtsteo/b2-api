/*
  Warnings:

  - You are about to drop the `Colaborador` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Colaborador` DROP FOREIGN KEY `Colaborador_empresaId_fkey`;

-- DropForeignKey
ALTER TABLE `Produto` DROP FOREIGN KEY `Produto_colaboradorId_fkey`;

-- DropTable
DROP TABLE `Colaborador`;
