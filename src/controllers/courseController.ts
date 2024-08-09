import { Request, Response } from "express";
import Course from "../services/course";

class CourseController{
    static async createCourse(req:Request, res:Response){
        const course = await Course.createCourse(req.body);

        if(course!==false){
            res.status(201).json({
                message: "Curso criado",
                curso: course
            })
        }else{
            res.status(500).json({
                messageErro: "Falha ao criar curso"
            })
        }

    }


    static async getAllCourses(req:Request, res:Response){
        const courses = await Course.getCourses();

        if(courses !== false){
            res.status(200).json({
                cursos:courses
            });
        }
    }

    static async getCourse(req:Request, res:Response){
        const {nomeCurso, nomeInstrutor} = req.query;

        const course = await Course.getCourseByNameInstructorOrNameCourse(`${nomeInstrutor}`, `${nomeCurso}`);

        if(course!==false){
            res.status(200).json({
                cursos: course
            });
        }
    }

    static async updateCourse(req:Request, res:Response){
        const {id} = req.params;

        const {nome, descricao} = req.body;

        const course = await Course.updateCourse(parseInt(id), `${nome}`, `${descricao}`);

        if(course!== false){
            res.status(200).json({
                message: "Curso atualizado com sucesso"
            });
        }else{
            res.json({
                message:"Falha na atualização"
            })
        }
    }

    static async deleteCourse(req:Request, res:Response){
        const {id} = req.params;

        const course = await Course.deleteCourse(parseInt(id));

        if(course!==false){
            res.status(200).json({
                message: "Curso excluído"
            })
        }

    }

}

export default CourseController;