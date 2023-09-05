import { Response, Request } from 'express'
import { CadastrarProdutosServices } from '../../Services/Produtos/CadastrarProdutosSerices'

class CadastrarProdutosController {
    async handle(req: Request, res: Response) {
        const {
            nome,
            preco,
            fornecedor,
            quantidade } = req.body

        const cadastrarProdutosServices = new CadastrarProdutosServices()

        const produtos = await cadastrarProdutosServices.execute({
            nome, preco, fornecedor, quantidade
        })

        return res.json(produtos)
    }

}

export { CadastrarProdutosController }