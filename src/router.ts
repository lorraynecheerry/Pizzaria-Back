import {Router} from 'express'
import { CadastrarClientesController  } from './Controllers/Clientes/CadastrarClientesController'
import {  CadastrarUsuariosController} from './Controllers/Usuarios/CadastrarUsuariosController'

const router = Router()

//Clienetes
router.post('/CadastarClientes', new CadastrarClientesController().handle)

//Usuarios
router.post('/CadastrarUsuarios', new CadastrarUsuariosController().handle)






export {router}