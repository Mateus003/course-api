import prisma from "../libs/prisma";
import { Prisma } from "@prisma/client";

class Instructor{
    static async createInstructor(data: Prisma.InstrutorCreateInput){
        try{
            return await prisma.instrutor.create({data});
        }catch(err){
            console.log(err)
            return false;
        }
    }

    static async getAlLInstructors(){
        try{
            return await prisma.instrutor.findMany({});
        }catch(err){
            console.log(err)
            return false;
        }
    }

    static async getInstructorByNameOrEmail(name:string, email:string){
        try{
            return await prisma.instrutor.findMany({
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

    static async updateInstructor(id:number, bio?:string, email?:string, nome?:string){
        try{
            const dataToUpdate: any = {}

            if (bio) dataToUpdate.bio = bio;
            if (email) dataToUpdate.email = email;
            if (nome) dataToUpdate.nome = nome;

            return prisma.instrutor.update({
                where:{
                    id:id
                }, data: dataToUpdate
            });

        }catch(err){
            return false;
        }
        
    }

    static async deleteInstructor(id:number){
        try{
            return await prisma.instrutor.delete({
                where:{
                    id:id
                }
            });

        }catch(err){
            return false;
        }
    }

}

export default Instructor;
