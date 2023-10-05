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
        return{data:'Filme Apagado com Sucesso'}
    }
}

export { DeletarFilmeServices }