-- DropForeignKey
ALTER TABLE `cursos` DROP FOREIGN KEY `cursos_instrutorId_fkey`;

-- AddForeignKey
ALTER TABLE `cursos` ADD CONSTRAINT `cursos_instrutorId_fkey` FOREIGN KEY (`instrutorId`) REFERENCES `instrutores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
