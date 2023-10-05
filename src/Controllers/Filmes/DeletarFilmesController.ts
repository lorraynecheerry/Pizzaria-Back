import { Response, Request } from "express";
import {DeletarFilmeServices } from '../../Services/Filmes/DeletarFilmesServices'


class DeletarFilmesController{
    async handle( req: Request ,res:Response ) {
        const { apagar } = req.body
        const deletarFilmesServices = new DeletarFilmeServices()
        const filmes = await deletarFilmesServices.execute({ apagar })
        return res.json( filmes )

    }

}

export { DeletarFilmesController }
