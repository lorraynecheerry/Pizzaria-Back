import prismaClient from "../../prisma"

interface Deletarclientes {
    apagar: string
}

class DeletarClientesServices {
    async execute({ apagar }: Deletarclientes) {
        await prismaClient.clientes.delete({
            where: {
                id: apagar
            }
        })
        return('Cliente Apagado com Sucesso')
    }
}


export { DeletarClientesServices }