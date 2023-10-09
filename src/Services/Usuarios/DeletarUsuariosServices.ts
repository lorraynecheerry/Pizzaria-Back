import prismaClient from "../../prisma";

interface Deletar {
    deletar: string
}


class DeletarUsuariosServices {
    async execute({ deletar}: Deletar) {
        await prismaClient.user.delete({
            where: {
                id: deletar
        }
        })
        return{data:'Usuario Apagado com Sucesso'}
    }
}

export { DeletarUsuariosServices }