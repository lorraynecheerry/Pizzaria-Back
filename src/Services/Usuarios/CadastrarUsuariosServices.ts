import prismaClient from "../../prisma";

interface CadastrarUsuarios{
    nome: string
    email: string
    senha: string
}

class CadastrarUsuarioServices{
    async execute({nome, email, senha} : CadastrarUsuarios) {
        if (!nome|| !email|| !senha){
            throw new Error('Campos em Brancos nao sao permitidos')

        }
        const emailCadastrado = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        //chamando a constante de cima
        if(emailCadastrado){
            throw new Error ('Email ja esta Cadastrdao')
        }

        const usuario = await prismaClient.user.create({
            data:{
                nome:nome,
                email:email,
                senha:senha
            }

        })
        return{ dados: usuario}
      
    }
}

export { CadastrarUsuarioServices }