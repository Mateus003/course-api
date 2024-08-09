import { Router } from "express";
import CourseController from "../controllers/courseController";


const courseRouter = Router();

courseRouter.get('/cursos', CourseController.getAllCourses );

courseRouter.get('/curso', CourseController.getCourse);

courseRouter.post('/curso', CourseController.createCourse);

courseRouter.patch('/curso/:id', CourseController.updateCourse);

courseRouter.delete('/curso/:id',CourseController.deleteCourse );

export default courseRouter;