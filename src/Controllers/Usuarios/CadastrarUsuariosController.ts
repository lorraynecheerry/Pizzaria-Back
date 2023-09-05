import { Request, Response} from 'express'
import { CadastrarUsuarioServices} from '../../Services/Usuarios/CadastrarUsuariosServices'

class CadastrarUsuariosController{
    async handle(req :Request, res: Response) { 
        const {nome, email, senha} = req.body
        const cadastrarUsuariosServices = new CadastrarUsuarioServices()
        const usuarios = await cadastrarUsuariosServices.execute({
            nome,
            email,
            senha
        })
        console.log(usuarios)

    }

}



export { CadastrarUsuariosController }