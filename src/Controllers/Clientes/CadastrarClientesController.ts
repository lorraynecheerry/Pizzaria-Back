import { Request, Response } from "express";
import { CadastrarClientesServices } from '../../Services/Clientes/CadastrarClientesServices'

class CadastrarClientesController {

    //hanle = metodo manipular dados
    async handle(req: Request, res: Response) {
        const { nome, celular, fixo, cpf_cnpj, rg_ie, rua, bairro, cidade, estado, complemento } = req.body

        const cadastrarClientesServices = new CadastrarClientesServices()
        //  clientes = nome da tabela do schema 
        //execute metodo que pega informaçoes

        const clientes = await cadastrarClientesServices.execute({
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
        })

        return res.json(clientes)

    }

}

export { CadastrarClientesController }
