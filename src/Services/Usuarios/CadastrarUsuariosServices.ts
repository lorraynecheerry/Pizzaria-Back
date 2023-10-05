import prismaClient from "../../prisma";

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

        const usuarios = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password
            },
            select: {
                id: true,
                name: true,
                email: true
            }

        })
        console.log(usuarios)


    }
}

export { CadastrarUsuarioServices }
