import prismaClient from "../../prisma";

interface DeletarUsuarios {
    apagarUsuarios: string
}

class DeletarUsuariosServices {
    async execute({ apagarUsuarios }: DeletarUsuarios) {
        await prismaClient.user.delete({
            where: {
                id: apagarUsuarios
            }
        })
        return { data: 'Usuario Apagado com Sucesso' }
    }
}

export { DeletarUsuariosServices }