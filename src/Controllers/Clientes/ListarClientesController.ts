import { Response, Request } from "express";
import { ListarClientesServices} from '../../Services/Clientes/ListarClientesServices'

class ListarClientesController{
    async handle(res:Response, req:Request) {
        const listarClientesServices = new ListarClientesServices()
        const clientes = await listarClientesServices.execute()
        
      console.log(clientes)
        
    }
}

export{ ListarClientesController }