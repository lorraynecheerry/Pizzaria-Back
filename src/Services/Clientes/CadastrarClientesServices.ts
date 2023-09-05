import prismaClient from '../../prisma'

interface CadastrarClientes {
    nome: string
    celular: string
    fixo: string
    cpf_cnpj: string
    rg_ie: string
    rua: string
    bairro: string
    cidade: string
    estado: string
    complemento: string
}

class CadastrarClientesServices {
    async execute({
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
    }: CadastrarClientes) {
        if (!nome || !celular || !fixo || !cpf_cnpj || !rg_ie || !rua || !bairro || !cidade || !estado || !complemento) {
            throw new Error('Campos em Branco não são Permitidos')
        }

        const clienteCadastrado = await prismaClient.clientes.findFirst({
            where: {
                OR: [
                    { cpf_cnpj: cpf_cnpj },
                    { rg_ie: rg_ie }
                ]
            }
        })

        //chamando a constante la de cima
        if (clienteCadastrado) {
            throw new Error('CPF/CNPJ e/ou RG/IE ja estão cadatrados')
        }

        const clientes = await prismaClient.clientes.create({
            data: {
                nome: nome,
                cpf_cnpj: cpf_cnpj,
                rg_ie: rg_ie,
                celular: celular,
                fixo: fixo,
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                complemento: complemento
            },
            select: {
                nome: true,
                celular: true, fixo: true,
                cpf_cnpj: true, rg_ie: true,
                rua: true, bairro: true,
                cidade: true, estado: true,
                complemento: true
            }
        })
        return { data: clientes }

    }

}

export { CadastrarClientesServices }