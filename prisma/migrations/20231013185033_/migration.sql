/*
  Warnings:

  - You are about to drop the `possui` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id` to the `cadastra_prod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permissaoId` to the `permissao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `reside` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cadastra` DROP FOREIGN KEY `FK_cadastra_1`;

-- DropForeignKey
ALTER TABLE `cadastra` DROP FOREIGN KEY `FK_cadastra_2`;

-- DropForeignKey
ALTER TABLE `cadastra_prod` DROP FOREIGN KEY `FK_cadastra_prod_1`;

-- DropForeignKey
ALTER TABLE `cadastra_prod` DROP FOREIGN KEY `FK_cadastra_prod_2`;

-- DropForeignKey
ALTER TABLE `empresa` DROP FOREIGN KEY `FK_empresa_2`;

-- DropForeignKey
ALTER TABLE `endereco` DROP FOREIGN KEY `FK_endereco_2`;

-- DropForeignKey
ALTER TABLE `funcionario` DROP FOREIGN KEY `FK_funcionario_2`;

-- DropForeignKey
ALTER TABLE `possui` DROP FOREIGN KEY `FK_possui_1`;

-- DropForeignKey
ALTER TABLE `possui` DROP FOREIGN KEY `FK_possui_2`;

-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `FK_produto_2`;

-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `FK_produto_3`;

-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `FK_produto_4`;

-- DropForeignKey
ALTER TABLE `reside` DROP FOREIGN KEY `FK_reside_1`;

-- DropForeignKey
ALTER TABLE `reside` DROP FOREIGN KEY `FK_reside_2`;

-- AlterTable
ALTER TABLE `cadastra` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cadastra_prod` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `permissao` ADD COLUMN `permissaoId` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `reside` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `possui`;

-- AddForeignKey
ALTER TABLE `cadastra` ADD CONSTRAINT `FK_cadastra_1` FOREIGN KEY (`fk_usuario_master_id`) REFERENCES `usuario_master`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cadastra` ADD CONSTRAINT `FK_cadastra_2` FOREIGN KEY (`fk_funcionario_id`) REFERENCES `funcionario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cadastra_prod` ADD CONSTRAINT `FK_cadastra_prod_1` FOREIGN KEY (`fk_empresa_id`) REFERENCES `empresa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cadastra_prod` ADD CONSTRAINT `FK_cadastra_prod_2` FOREIGN KEY (`fk_produto_id`) REFERENCES `produto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `empresa` ADD CONSTRAINT `FK_empresa_2` FOREIGN KEY (`fk_usuario_master_id`) REFERENCES `usuario_master`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `FK_endereco_2` FOREIGN KEY (`fk_tipo_endereco_id`) REFERENCES `tipo_endereco`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `FK_funcionario_2` FOREIGN KEY (`fk_empresa_id`) REFERENCES `empresa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `permissao` ADD CONSTRAINT `permissao_permissaoId_fkey` FOREIGN KEY (`permissaoId`) REFERENCES `funcionario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `FK_produto_2` FOREIGN KEY (`fk_categoria_id`) REFERENCES `categoria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `FK_produto_3` FOREIGN KEY (`fk_grupo_id`) REFERENCES `grupo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `FK_produto_4` FOREIGN KEY (`fk_familia_id`) REFERENCES `familia`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reside` ADD CONSTRAINT `FK_reside_1` FOREIGN KEY (`fk_empresa_id`) REFERENCES `empresa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reside` ADD CONSTRAINT `FK_reside_2` FOREIGN KEY (`fk_endereco_id`) REFERENCES `endereco`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
