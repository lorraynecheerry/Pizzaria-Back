import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CadastrarUsuarios {
    name: string
    email: string
    password: string
}

class CadastrarUsuarioServices {
    async execute({ name, email, password }: CadastrarUsuarios) {
        if (!name || !email || !password) {
            throw new Error('Campos em Brancos não deve ser Permitidos')
        }
        const emailCadastrado = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (emailCadastrado) {
            throw new Error('Email ja esta Cadastrdao')
        }

        const senhaCrypt = await hash (password, 8)
        const usuarios = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: senhaCrypt
            },
            select: {
                id: true,
                name: true,
                email: true
            }

        })
       return(usuarios)


    }
}

export { CadastrarUsuarioServices }
