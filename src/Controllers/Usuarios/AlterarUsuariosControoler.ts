import { Request, Response} from 'express'
import { AlterarUsuariosServices } from '../../Services/Usuarios/AlterarUsuariosServices'

class AlterarUsuariosController{
    async handle(req:Request, res: Response) {
        const{ name, email,} = req.body
        const alterarUsuariosServices = new AlterarUsuariosServices()
        const response = await alterarUsuariosServices.execute({
            name, email
        })
        return res.json(response)
    }
}


export { AlterarUsuariosController}