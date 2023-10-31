/*
  Warnings:

  - You are about to drop the column `desc` on the `Categoria` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[colaboradorId]` on the table `EmpresaColaborador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoria_nome` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Made the column `admin` on table `EmpresaColaborador` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Categoria` DROP COLUMN `desc`,
    ADD COLUMN `categoria_nome` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `EmpresaColaborador` MODIFY `admin` BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `EmpresaColaborador_colaboradorId_key` ON `EmpresaColaborador`(`colaboradorId`);
