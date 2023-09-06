import { Request, Response} from 'express'
import { CadastrarUsuarioServices} from '../../Services/Usuarios/CadastrarUsuariosServices'

class CadastrarUsuariosController{
    async handle(req :Request, res: Response) { 
        const {nome, email, senha} = req.body
        //instanciar
        const cadastrarUsuarioServices = new CadastrarUsuarioServices()
        const usuarios = await cadastrarUsuarioServices.execute({
            nome,
            email,
            senha
        })
       return res.json (usuarios)

    }

}



export { CadastrarUsuariosController }