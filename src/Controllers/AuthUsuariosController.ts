import { Request, Response} from 'express'
import { AuthUsuariosServices } from '../Services/Usuarios/AuthUsuariosServices'


class AuthUsuarioController{
    async handle(req: Request, res: Response){
        const { email, senha } = req.body        
        const authUsuarioServices = new AuthUsuariosServices()
        const resposta = await authUsuarioServices.execute({
            email,
            senha
        })
        return res.json(resposta)
    }
}

export { AuthUsuarioController }