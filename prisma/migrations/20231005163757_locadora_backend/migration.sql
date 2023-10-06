/*
  Warnings:

  - You are about to drop the column `nome` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the `clientes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `nome`,
    DROP COLUMN `senha`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `clientes`;

-- DropTable
DROP TABLE `produtos`;

-- CreateTable
CREATE TABLE `filmes` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
