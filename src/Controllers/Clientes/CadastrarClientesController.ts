import { Request, Response } from "express";
import { CriarClientesServices } from "../../Services/Clientes/CriarClientesServices"

class CriarClientesController {

    //hanle = metodo manipular dados
    async handle(req: Request, res: Response) {
        const {
            nome,
            celular,
            fixo,
            cpf_cnpj,
            rg_ie,
            rua,
            bairro,
            cidade,
            estado,
            complemento
        } = req.body

        const criarClientesServices = new CriarClientesServices()
        //clientes = nome da tabela do schema 
        //execute metodo que pega informaçoes

        
        // const clientes = await criarClientesServices.execute({
        //     nome,
        //     celular,
        //     fixo,
        //     cpf_cnpj,
        //     rg_ie,
        //     rua,
        //     bairro,
        //     cidade,
        //     estado,
        //     complemento
        // })
        // return res.json(clientes)

    }

}

export { CriarClientesController }
