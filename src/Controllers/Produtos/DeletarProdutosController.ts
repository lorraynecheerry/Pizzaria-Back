import { Response, Request } from "express";
import { DeletarProdutoServices } from "../../Services/Produtos/DeletarProdutosServices";

class DeletarProdutosController{
    async handle( req: Request ,res:Response ) {
        const { apagar } = req.body
        const deletarProdutosServices = new  DeletarProdutoServices()
        const produtos = await deletarProdutosServices.execute({ apagar })
        return res.json( produtos )

    }

}

export { DeletarProdutosController }