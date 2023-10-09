import { Request, Response} from 'express'
import { AuthUsuariosServices } from '../Services/Usuarios/AuthUsuariosServices'


class AuthUsuarioController{
    async handle(req: Request, res: Response){
        const { email, password } = req.body
        const authUsuarioServices = new AuthUsuariosServices()
        const resposta = await authUsuarioServices.execute({
            email,
            password
        })
        return res.json(resposta)
    }
}

export { AuthUsuarioController }