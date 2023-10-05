import prismaClient from "../../prisma";

interface Cadastrarfilmes {
    name: string
    value: string
    description: string
}

class CadastrarFilmesServices {
    async execute({ name, value, description }: Cadastrarfilmes) {
        if (!name || !value || !description) {
            throw new Error('Campos em Bracos Nao Sao Permitidos')
        }
        const filmeCadastrado = await prismaClient.films.findFirst({
            where: {
                name: name
            }
        })
        if (filmeCadastrado) {
            throw new Error('Filme ja Cadastrado')
        }


        const filmes = await prismaClient.films.create({
            data: {
                name: name,
                value: value,
                description: description
            }
        })
        return (filmes)
    }



}

export { CadastrarFilmesServices }