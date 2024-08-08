import prisma from "../libs/prisma";
import { Prisma } from '@prisma/client';

class Student{
    static async createStudent(data:Prisma.AlunoCreateInput){
        try{
            return await prisma.aluno.create({data});
        }catch(err){
            return false;
        }
    }

    static async getStudents(){
        try{
            return await prisma.aluno.findMany({});
        }catch(err){
            return false;
        }
    }

    static async getStudentByNameOrEmail(name:string, email:string){
        try{
            return await prisma.aluno.findMany({
                where:{
                    OR:[
                        {
                            nome:{
                                startsWith: name
                            }   
                        },
                        {
                            email:{
                                startsWith: email
                            }
                        },
                    ]      
                } 
            });
        }catch(err){
            return false;
        }
    }

    static async updateStudent(id:number, age?:number, email?:string, name?:string ){
        try {
            const dataToUpdate: any = {};
    
            if (age) dataToUpdate.idade = age;
            if (email) dataToUpdate.email = email;
            if (name) dataToUpdate.nome = name;
    
            return await prisma.aluno.update({
                where: {
                    id: id
                },
                data: dataToUpdate
            });
        } catch (err) {
            return false;
        }
    }


    static async studentDelete(id:number){
        try{
            return await prisma.aluno.delete({
                where:{
                    id:id
                }
            })
        }catch(err){
            return false;
        }
    }


}

export default Student;