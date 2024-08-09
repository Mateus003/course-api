import prisma from "../libs/prisma";
import { Prisma } from "@prisma/client";

class Course{
    static async createCourse(data:Prisma.CursoCreateInput){
        try{
            return await prisma.curso.create({data});
        }catch(err){
            return false;
        }
    }

    static async getCourses(){
        try{
            return await prisma.curso.findMany({});
        }catch(err){
            return false;
        }
    }

    static async getCourseByNameInstructorOrNameCourse(nomeInstructor:string, nameCourse:string){
        try{
            return prisma.$queryRaw`
                SELECT *
                FROM CURSOS C
                WHERE C.nome = ${nameCourse} OR  EXISTS(
                    SELECT *
                    FROM INSTRUTORES I
                    WHERE I.ID = C.instrutorId and I.nome = ${nomeInstructor}  
                ) 
            `
        }catch(err){
            return false;
        }
    }

    static async updateCourse(id:number, nome?:string, descricao?:string){
        try{
            const dataUpdate:any = {};
            if(nome) dataUpdate.nome =nome;
            if(descricao) dataUpdate.descricao;
            

            return prisma.instrutor.update({
                where:{
                    id:id
                }, data:dataUpdate
            });
        }catch(err){
            return false;
        }
    }

    static async deleteCourse(id:number){
        try{
            return prisma.instrutor.delete({
                where:{
                    id:id
                }
            })

        }catch(err){    
            return false;
        }
    }

}

export default Course;