-- CreateTable
CREATE TABLE `Empresa` (
    `id` VARCHAR(255) NOT NULL,
    `cnpj` VARCHAR(255) NOT NULL,
    `nome_fantasia` VARCHAR(255) NOT NULL,
    `razao_social` VARCHAR(255) NOT NULL,
    `proprietarioId` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Empresa_cnpj_key`(`cnpj`),
    INDEX `Empresa_proprietarioId_fkey`(`proprietarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(255) NOT NULL,
    `uf` CHAR(2) NOT NULL,
    `cidade` VARCHAR(255) NOT NULL,
    `bairro` VARCHAR(255) NOT NULL,
    `rua` VARCHAR(255) NOT NULL,
    `num` VARCHAR(255) NOT NULL,
    `refer` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Colaborador` (
    `id` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `sobrenome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `empresaId` VARCHAR(255) NULL,

    INDEX `Colaborador_empresaId_fkey`(`empresaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` TEXT NOT NULL,
    `ncm` VARCHAR(255) NOT NULL,
    `empresaId` VARCHAR(191) NULL,
    `proprietarioId` VARCHAR(191) NULL,
    `colaboradorId` VARCHAR(191) NULL,

    INDEX `Produto_empresaId_fkey`(`empresaId`),
    INDEX `Produto_colaboradorId_fkey`(`colaboradorId`),
    INDEX `Produto_proprietarioId_fkey`(`proprietarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proprietario` (
    `id` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `sobrenome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `data_cadastro` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cpf` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Proprietario_email_key`(`email`),
    UNIQUE INDEX `Proprietario_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_proprietarioId_fkey` FOREIGN KEY (`proprietarioId`) REFERENCES `Proprietario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Colaborador` ADD CONSTRAINT `Colaborador_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_colaboradorId_fkey` FOREIGN KEY (`colaboradorId`) REFERENCES `Colaborador`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_proprietarioId_fkey` FOREIGN KEY (`proprietarioId`) REFERENCES `Proprietario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
