import prismaClient from '../../prisma'

interface CriarClientesServices {
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

class CriarClientesServices {
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


    }: CriarClientesServices) {
        if (!nome || !celular || !fixo || !cpf_cnpj || !rg_ie || !rua || !bairro || !cidade || !estado || !complemento ) {

            throw new Error('CAMPOS EM BRANCO NAO SAO PERMITIDOS')
        }
    }
    // const clienteCadastrado = await prismaClient.clientes.findFirst({
    //     where: {
    //         OR: [
    //             { cpf_cnpj: cpf_cnpj },
    //             { rg_ie: rg_ie }
    //         ],
    //     },
    // })

    // if() {
    //     throw new Error('CPF_CNPJ - RG_IE já Cadastrado!')
    // }

    // const cliente = await

}

export { CriarClientesServices }