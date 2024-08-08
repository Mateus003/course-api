import { Router } from "express";
import StudentController from "../controllers/studentController";

const studentRouter = Router();

studentRouter.get('/alunos', StudentController.getStudents);

studentRouter.get('/aluno', StudentController.getStudent);

studentRouter.post('/aluno', StudentController.createStudent);

studentRouter.patch('/aluno/:id', StudentController.updateStudent);

studentRouter.delete('/aluno/:id', StudentController.studentDelete);

export default studentRouter;