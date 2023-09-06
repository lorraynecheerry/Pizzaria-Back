import { Router } from "express";

//Cadastrar
import { CadastrarUsuariosController } from "./Controllers/Usuarios/CadastrarUsuariosController";
import { CadastrarClientesController } from "./Controllers/Clientes/CadastrarClientesController";
import { CadastrarProdutosController } from "./Controllers/Produtos/CadastrarProdutosController";

//Listar
import { ListarClientesController } from "./Controllers/Clientes/ListarClientesController";
import { ListarProdutosController } from "./Controllers/Produtos/ListarProdutosController";
import { ListarUsuariosController } from "./Controllers/Usuarios/ListarUsuariosController";


const router = Router()

//Usuarios
router.post('/CriarUsuarios', new CadastrarUsuariosController().handle)
router.get('/ListarUsuarios', new ListarUsuariosController().handle)

//Clientes
router.post('/CriarClientes', new CadastrarClientesController().handle)
router.get('/ListarClientes', new ListarClientesController().handle)

//Produtos
router.post('/CriarProdutos', new CadastrarProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)


export { router }