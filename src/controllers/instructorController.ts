import { Request, Response } from "express";
import Instructor from "../services/instructor";

class InstructorController{
    static async createInstructor(req:Request, res:Response){
        const instructor = await Instructor.createInstructor(req.body);

        if(instructor !== false){
            res.status(201).json({
                message: "Sucesso na criação do instrutor",
                instrutor: instructor
            })
        }else{
            res.status(500).json({
                message: "Falha na criação"
            })
        }

    }

    static async getAllInstructors(req:Request, res:Response){
        const instructors = await Instructor.getAlLInstructors();
        if(instructors !== false){
            res.status(200).json({
                message: "Todos os instrutores: ",
                instrutores: instructors
            })
        }else{
            res.status(500).json({
                message: "Falha na consulta"
            })
        }
    }

    static async getInstructor(req:Request, res:Response){
        const {nome, email} = req.query;
        const instructor = await Instructor.getInstructorByNameOrEmail(`${nome}`, `${email}`);
        if(instructor !== false){
            res.status(200).json({
                instrutores: instructor
            })
        }else{
            res.status(500).json({
                message: "Falha na consulta"
            })
        }
    }


    static async updateInstructor(req:Request, res:Response){
        const {id} = req.params;

        const {bio, nome, email} = req.body;

        const instructor = await Instructor.updateInstructor(parseInt(id), `${bio}`, `${nome}`, `${email}`);

        if(instructor !== false){
            res.status(200).json({
                message: "Instrutor atualizado com sucesso"
            });
        }else{
            res.status(500).json({
                message: "Falha em atualizar o instrutor"
            })
        }
    }

    static async deleteInstructor(req:Request, res:Response){
        const {id} = req.params;

        const instructor = await Instructor.deleteInstructor(parseInt(id));

        if(instructor!== false){
            res.status(200).json({
                message:"Instrutor excluído com sucesso"
            });
        }else{
            res.status(500).json({
                message:"Falha na exclusão"
            });
        }



    }



}

export default InstructorController;