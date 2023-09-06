import { Request, Response } from "express";
import { DeletarUsuariosServices } from '../../Services/Usuarios/DeletarUsuariosServices'


class DeletarUsuariosController{
    async handle(req: Request, res: Response) {
        const { apagarUsuarios } = req.body
        const deletarUsuariosServices = new DeletarUsuariosServices()
        const usuarios = await deletarUsuariosServices.execute({apagarUsuarios})
        return res.json(usuarios)
    }
}

export { DeletarUsuariosController }