import { Request, Response } from "express";
import { DeletarClientesServices } from '../../Services/Clientes/DeletarClienteServices'

class DeletarClientesController {
    async handle(req: Request, res: Response) {
        const { apagar } = req.body
        const deletarClientesServices = new DeletarClientesServices()
        const clientes = await deletarClientesServices.execute({ apagar })
        return res.json(clientes)
    }

}


export { DeletarClientesController }