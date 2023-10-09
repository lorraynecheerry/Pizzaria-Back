import { Router } from "express";

//Cadastrar
import { CadastrarFilmesController } from "./Controllers/Filmes/CadastrarFilmesController";
import { CadastrarUsuariosController } from "./Controllers/Usuarios/CadastrarUsuariosController";


//Listar
import { ListarFilmesController } from "./Controllers/Filmes/ListarFilmesController";
import { ListarUsuariosController } from "./Controllers/Usuarios/ListarUsuariosController";


//Deletar
import { DeletarFilmesController } from "./Controllers/Filmes/DeletarFilmesController";
import { DeletarUsuariosController } from "./Controllers/Usuarios/DeletarUsuariosController";

import { AlterarUsuariosController } from "./Controllers/Usuarios/AlterarUsuariosControoler";


import { Autenticado } from "./middleware/Autenticado";
import { AuthUsuarioController } from "./Controllers/AuthUsuariosController";

const router = Router()

//Usuarios
router.post('/CriarUsuarios', new CadastrarUsuariosController().handle)
router.get('/ListarUsuarios',Autenticado, new ListarUsuariosController().handle)
router.delete('/DeletarUsuario/:id',Autenticado, new DeletarUsuariosController().handle)
router.post ('/AuthLogin', new AuthUsuarioController().handle)

//Filmes
router.post('/CriarFilmes',Autenticado, new CadastrarFilmesController().handle)
router.get('/ListarFilmes',Autenticado, new ListarFilmesController().handle)
router.delete('/DeletarFilmes/:id',Autenticado,new DeletarFilmesController().handle)


export { router }