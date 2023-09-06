import prismaClient from "../../prisma";


class ListarClientesServices {
    async execute() {
        //findMany é um metedo que chama varios de uma vez, enquanto o
        //findFirst e um por vez
        const clientes = await prismaClient.clientes.findMany({})
        return (clientes)

    }
}

export { ListarClientesServices }