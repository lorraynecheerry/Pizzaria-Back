import { Router } from "express";

//Cadastrar
import { CadastrarFilmesController } from "./Controllers/Filmes/CadastrarFilmesController";
import { CadastrarUsuariosController } from "./Controllers/Usuarios/CadastrarUsuariosController";


//Listar
import { ListarFilmesController } from "./Controllers/Filmes/ListarFilmesController";
import { ListarUsuariosController } from "./Controllers/Usuarios/ListarUsuariosController";


//Deletar
import { DeletarFilmesController } from "./Controllers/Filmes/DeletarFilmesController";
import { DeletarUsuariosController } from './Controllers/Usuarios/DeletarUsuariosController'


const router = Router()

//Usuarios
router.post('/CriarUsuarios', new CadastrarUsuariosController().handle)
router.get('/ListarUsuarios', new ListarUsuariosController().handle)
router.delete('/DeletarUsuario/:id', new DeletarUsuariosController().handle)

//Filmes
router.post('/CriarFilmes', new CadastrarFilmesController().handle)
router.get('/ListarFilmes', new ListarFilmesController().handle)
router.delete('/DeletarFilmes/:id', new DeletarFilmesController().handle)


export { router }