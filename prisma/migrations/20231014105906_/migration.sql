-- CreateTable
CREATE TABLE `Empresa` (
    `id` VARCHAR(255) NOT NULL,
    `cnpj` VARCHAR(255) NOT NULL,
    `nome_fantasia` VARCHAR(255) NOT NULL,
    `razao_socia` VARCHAR(255) NOT NULL,
    `proprietarioId` VARCHAR(255) NOT NULL,

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
CREATE TABLE `Funcionario` (
    `id` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `sobrenome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `id` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` TEXT NOT NULL,
    `ncm` VARCHAR(255) NOT NULL,
    `empresaId` VARCHAR(191) NOT NULL,
    `proprietarioId` VARCHAR(191) NOT NULL,
    `funcionarioId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proprietario` (
    `id` VARCHAR(255) NOT NULL,
    `nome` VARCHAR(255) NULL,
    `sobrenome` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `senha` VARCHAR(255) NULL,
    `data_cadastro` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `cpf` VARCHAR(255) NULL,

    UNIQUE INDEX `Proprietario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_proprietarioId_fkey` FOREIGN KEY (`proprietarioId`) REFERENCES `Proprietario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_proprietarioId_fkey` FOREIGN KEY (`proprietarioId`) REFERENCES `Proprietario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produto` ADD CONSTRAINT `Produto_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
