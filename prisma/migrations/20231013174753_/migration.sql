-- CreateTable
CREATE TABLE `cadastra` (
    `id` VARCHAR(191) NOT NULL,
    `fk_usuario_master_id` VARCHAR(255) NULL,
    `fk_funcionario_id` VARCHAR(255) NULL,
    `data_cadastro` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `cadastra_id_key`(`id`),
    INDEX `FK_cadastra_1`(`fk_usuario_master_id`),
    INDEX `FK_cadastra_2`(`fk_funcionario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cadastra_prod` (
    `fk_empresa_id` VARCHAR(255) NULL,
    `fk_produto_id` VARCHAR(255) NULL,

    INDEX `FK_cadastra_prod_1`(`fk_empresa_id`),
    INDEX `FK_cadastra_prod_2`(`fk_produto_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `empresa` (
    `id` VARCHAR(255) NOT NULL,
    `cnpj` VARCHAR(255) NULL,
    `nome_fantasia` VARCHAR(255) NULL,
    `razao_socia` VARCHAR(255) NULL,
    `fk_usuario_master_id` VARCHAR(255) NULL,

    INDEX `FK_empresa_2`(`fk_usuario_master_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(255) NULL,
    `uf` CHAR(2) NULL,
    `cidade` VARCHAR(255) NULL,
    `bairro` VARCHAR(255) NULL,
    `rua` VARCHAR(255) NULL,
    `num` VARCHAR(255) NULL,
    `refer` VARCHAR(255) NULL,
    `fk_tipo_endereco_id` INTEGER NULL,

    INDEX `FK_endereco_2`(`fk_tipo_endereco_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `familia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionario` (
    `id` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NULL,
    `sobrenome` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `senha` VARCHAR(255) NULL,
    `fk_empresa_id` VARCHAR(255) NULL,

    INDEX `FK_funcionario_2`(`fk_empresa_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grupo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissao` (
    `id` INTEGER NOT NULL,
    `tipo` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `possui` (
    `fk_funcionario_id` VARCHAR(255) NULL,
    `fk_permissao_id` INTEGER NULL,

    INDEX `FK_possui_1`(`fk_funcionario_id`),
    INDEX `FK_possui_2`(`fk_permissao_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `id` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NULL,
    `descricao` TEXT NULL,
    `ncm` VARCHAR(255) NULL,
    `fk_categoria_id` INTEGER NULL,
    `fk_grupo_id` INTEGER NULL,
    `fk_familia_id` INTEGER NULL,

    INDEX `FK_produto_2`(`fk_categoria_id`),
    INDEX `FK_produto_3`(`fk_grupo_id`),
    INDEX `FK_produto_4`(`fk_familia_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reside` (
    `fk_empresa_id` VARCHAR(255) NULL,
    `fk_endereco_id` INTEGER NULL,

    INDEX `FK_reside_1`(`fk_empresa_id`),
    INDEX `FK_reside_2`(`fk_endereco_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario_master` (
    `id` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NULL,
    `sobrenome` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `senha` VARCHAR(255) NULL,
    `data_cadastro` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cpf` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cadastra` ADD CONSTRAINT `FK_cadastra_1` FOREIGN KEY (`fk_usuario_master_id`) REFERENCES `usuario_master`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cadastra` ADD CONSTRAINT `FK_cadastra_2` FOREIGN KEY (`fk_funcionario_id`) REFERENCES `funcionario`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cadastra_prod` ADD CONSTRAINT `FK_cadastra_prod_1` FOREIGN KEY (`fk_empresa_id`) REFERENCES `empresa`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cadastra_prod` ADD CONSTRAINT `FK_cadastra_prod_2` FOREIGN KEY (`fk_produto_id`) REFERENCES `produto`(`id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `empresa` ADD CONSTRAINT `FK_empresa_2` FOREIGN KEY (`fk_usuario_master_id`) REFERENCES `usuario_master`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `FK_endereco_2` FOREIGN KEY (`fk_tipo_endereco_id`) REFERENCES `tipo_endereco`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `FK_funcionario_2` FOREIGN KEY (`fk_empresa_id`) REFERENCES `empresa`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `possui` ADD CONSTRAINT `FK_possui_1` FOREIGN KEY (`fk_funcionario_id`) REFERENCES `funcionario`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `possui` ADD CONSTRAINT `FK_possui_2` FOREIGN KEY (`fk_permissao_id`) REFERENCES `permissao`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `FK_produto_2` FOREIGN KEY (`fk_categoria_id`) REFERENCES `categoria`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `FK_produto_3` FOREIGN KEY (`fk_grupo_id`) REFERENCES `grupo`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `FK_produto_4` FOREIGN KEY (`fk_familia_id`) REFERENCES `familia`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `reside` ADD CONSTRAINT `FK_reside_1` FOREIGN KEY (`fk_empresa_id`) REFERENCES `empresa`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `reside` ADD CONSTRAINT `FK_reside_2` FOREIGN KEY (`fk_endereco_id`) REFERENCES `endereco`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
