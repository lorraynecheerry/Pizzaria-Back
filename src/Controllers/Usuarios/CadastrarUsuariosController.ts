import { Request, Response } from 'express'
import { CadastrarUsuarioServices } from '../../Services/Usuarios/CadastrarUsuariosServices'

class CadastrarUsuariosController {
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body
        const cadastrarUsuarioServices = new CadastrarUsuarioServices()
        const usuarios = await cadastrarUsuarioServices.execute({
            name,
            email,
            password
        })

        return res.json(usuarios)

    }


}



export { CadastrarUsuariosController }