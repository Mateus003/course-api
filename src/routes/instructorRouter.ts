import { Router } from "express";
import InstructorController from "../controllers/instructorController";


const instructorRouter = Router();

instructorRouter.get('/instrutores', InstructorController.getAllInstructors );

instructorRouter.get('/instrutor', InstructorController.getInstructor);

instructorRouter.post('/instrutor', InstructorController.createInstructor);

instructorRouter.patch('/instrutor/:id', InstructorController.updateInstructor);

instructorRouter.delete('/instrutor/:id',InstructorController.deleteInstructor );

export default instructorRouter;