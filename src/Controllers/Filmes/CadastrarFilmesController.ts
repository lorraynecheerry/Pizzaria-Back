import { Response, Request } from 'express'
import { CadastrarFilmesServices} from '../../Services/Filmes/CadastrarFilmesServices'


class CadastrarFilmesController {
    async handle (req:Request, res: Response) {
        const { name, value, description}= req.body
       
        const criarFilmesServices = new CadastrarFilmesServices()
        const filmes = await criarFilmesServices.execute({
            name,
            value,
            description
        })
        return res.json(filmes)
    }
}
   
export { CadastrarFilmesController }



