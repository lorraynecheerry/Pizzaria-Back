import prismaClient from "../../prisma"

interface DeletarProduto{
    apagar: string
}

class DeletarProdutoServices{
    async execute ({ apagar} : DeletarProduto) {
        await prismaClient.produtos.delete({
            where:{
                id:apagar
            }
        })
        return('Produto Apagado com Sucesso')
    }
}
 

export { DeletarProdutoServices }