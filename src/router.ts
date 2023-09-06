import { Router } from "express";

//Cadastrar
import { CadastrarUsuariosController } from "./Controllers/Usuarios/CadastrarUsuariosController";
import { CadastrarClientesController } from "./Controllers/Clientes/CadastrarClientesController";
import { CadastrarProdutosController } from "./Controllers/Produtos/CadastrarProdutosController";

//Listar
import { ListarClientesController } from "./Controllers/Clientes/ListarClientesController";
import { ListarProdutosController } from "./Controllers/Produtos/ListarProdutosController";
import { ListarUsuariosController } from "./Controllers/Usuarios/ListarUsuariosController";

//Deletar
import { DeletarProdutosController } from "./Controllers/Produtos/DeletarProdutosController";
import { DeletarClientesController } from "./Controllers/Clientes/DeletarClientesController";
import { DeletarUsuariosController } from "./Controllers/Usuarios/DeletarUsuariosController";


const router = Router()

//Usuarios
router.post('/CriarUsuarios', new CadastrarUsuariosController().handle)
router.get('/ListarUsuarios', new ListarUsuariosController().handle)
router.delete('/DeletarUsuarios/:id', new DeletarUsuariosController().handle)

//Clientes
router.post('/CriarClientes', new CadastrarClientesController().handle)
router.get('/ListarClientes', new ListarClientesController().handle)
router.delete('/DeletarClientes/:id', new DeletarClientesController().handle)

//Produtos
router.post('/CriarProdutos', new CadastrarProdutosController().handle)
router.get('/ListarProdutos', new ListarProdutosController().handle)
router.delete('/DeletarProdutos/:id', new DeletarProdutosController().handle)


export { router }