import prismaClient from "../../prisma";

interface CadastrarProdutos {
    nome: string
    preco: string
    fornecedor: string
    quantidade: string
}

class CadastrarProdutosServices {
    async execute({ nome, preco, fornecedor, quantidade }: CadastrarProdutos) {
        if (!nome || !preco || !fornecedor || !quantidade ) {
            throw new Error('Campos em brancos nao sao validos')
        }
        const produtos = await prismaClient.produtos.create({
            data:{
                nome: nome,
                preco: preco,
                fornecedor: fornecedor,
                quantdade:quantidade
            }
        })
        return { data: produtos}
    }
}

export { CadastrarProdutosServices}