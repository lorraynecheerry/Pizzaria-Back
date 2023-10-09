import prismaClient from "../../prisma";

interface alteraUsers {
    id: string
    name: string
    email: string
}


class AlterarUsuariosServices {
    async execute({ id, name, email }: alteraUsers) {
        await prismaClient.user.update({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email
            }
        })
        return {dados: 'Dados alterados Com Sucesso'}
    }

}

export{ AlterarUsuariosServices }