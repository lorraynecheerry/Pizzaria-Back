import express, { Response, Request, NextFunction} from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './router'

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        //erro 400 problemas com a conexao de internet
        return res.status(400).json({
            error: err.message
        })
    }
    //erro 500 problema de servidor
    return res.status(500).json({
        status: 'Error',
        message: 'Erro Interno Servidor'
    })
})

app.listen(3334, () => console.log( 'Servidao Rodando na porta 3334'))
