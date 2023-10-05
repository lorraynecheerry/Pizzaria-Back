import { Router } from "express";

//Cadastrar
import { CadastrarFilmesController } from "./Controllers/Filmes/CadastrarFilmesController";

//Listar
import { ListarFilmesController } from "./Controllers/Filmes/ListarFilmesController";


//Deletar


const router = Router()

//Usuarios


//Filmes
router.post('/CriarFilmes', new CadastrarFilmesController().handle)
router.get ('/ListarFilmes', new ListarFilmesController().handle)


export { router }