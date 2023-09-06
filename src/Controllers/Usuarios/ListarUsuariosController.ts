import { Request, Response } from "express";
import { ListarUsuariosServices } from '../../Services/Usuarios/ListarUsuariosSerices'

class ListarUsuariosController{
    async handle(req: Request, res: Response) {
    const listarUsuariosServices = new ListarUsuariosServices()
    const usuarios = await listarUsuariosServices.execute()
    return res.json(usuarios)
    }
}
export {ListarUsuariosController}