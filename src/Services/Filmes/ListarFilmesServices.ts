import prismaClient from "../../prisma";


class ListarFilmesServices{
    async execute(){
        const filmes = await prismaClient.films.findMany({})
        return (filmes)
    }
}

export { ListarFilmesServices }