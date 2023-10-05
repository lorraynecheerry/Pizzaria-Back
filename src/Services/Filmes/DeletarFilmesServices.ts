import prismaClient from "../../prisma"

interface DeletarFilme{
    apagar: string
}

class DeletarFilmeServices{
    async execute ({ apagar} : DeletarFilme) {
        await prismaClient.films.delete({
            where:{
                id:apagar
            }
        })
        return('Filme Apagado com Sucesso')
    }
}
 

export { DeletarFilmeServices }