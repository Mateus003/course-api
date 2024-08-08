-- DropForeignKey
ALTER TABLE `cursos` DROP FOREIGN KEY `cursos_aluno_id_fkey`;

-- AlterTable
ALTER TABLE `cursos` MODIFY `aluno_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `cursos` ADD CONSTRAINT `cursos_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `alunos`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
