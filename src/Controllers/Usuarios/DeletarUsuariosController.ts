import { Request,Response } from "express";
import { DeletarUsuariosServices } from "../../Services/Usuarios/DeletarUsuariosServices";


class DeletarUsuariosController{
    async handle (req: Request, res: Response){
        const{deletar} = req.body
        const deletarFilmesServices = new DeletarUsuariosServices()
        const usuarios = await deletarFilmesServices.execute({deletar})
        return res.json(usuarios)
    }
}


export { DeletarUsuariosController }
