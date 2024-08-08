import { Request, Response } from "express";
import Student from "../services/student";

class StudentController{
    static async createStudent(req: Request, res:Response){
        const student  = await Student.createStudent(req.body);

        if(student){
            res.status(201).json({
                message: 'Aluno criado com sucesso',
                student:student

            });
        }else{
            res.status(400).json({
                message: 'Falha na criação',
                error: student
            });
        }

    }


    static async getStudents(req: Request, res: Response){
        const students = await Student.getStudents();

        if(students!==false){
            res.status(200).json({
                students:students
            });
        }

    }

    static async getStudent(req: Request, res: Response){
        const{nome, email} = req.query;

        const students = await Student.getStudentByNameOrEmail(`${nome}`, `${email}`);

        if(students!==false){
            res.status(200).json({
                students:students
            });
        }

    }

    static async updateStudent(req:Request, res:Response){
        const {id} = req.params;

        const {email, nome, idade} = req.body;

        const student = await Student.updateStudent(parseInt(id), parseInt(idade), `${email}`, `${nome}`);

        if(student!==false){
            res.status(200).json({
                message: "Atualizado com sucesso",
                student:student
            });
        }else{
            res.status(500).json({
                message: 'Falha na atualização',
                error: student
            });
        }
    }

    static async studentDelete(req:Request, res:Response){
        const {id} = req.params
        const student = await Student.studentDelete(parseInt(id));
        console.log(student);

        if(student !==false){
            res.status(200).json({
                message: "Aluno excluído com sucesso"
            });
        }else{
            res.status(500).json({
                message: 'Falha ao excluir aluno'
            });
        }
    }
}

export default StudentController;