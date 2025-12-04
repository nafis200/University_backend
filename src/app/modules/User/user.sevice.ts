import { UserRole } from "@prisma/client"
import * as bcrypt from 'bcrypt'
import prisma from "../../../shared/prisma";



const createAdmin = async(data:any)=>{
    
    const hasedPassword:string = await bcrypt.hash(data.password, 10);

    const userData = {
        email:data.admin.email,
        password:hasedPassword,
        role:UserRole.ADMIN
    }

    const result = await prisma.$transaction(async(transactionClient:any)=>{
        const createUserData = await transactionClient.user.create({
            data:userData
        });

        const createAdminData = await transactionClient.admin.create({
            data:data.admin
        })

        return createAdminData
    })

    
    return result

}

export const userService = {
    createAdmin
}