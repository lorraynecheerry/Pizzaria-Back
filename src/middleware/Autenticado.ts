import { Request, Response, NextFunction, request } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export function Autenticado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization
    if(!authToken) {
        return res.json({dados: 'Token Inexistente'})
    }
    const[, token] = authToken.split(' ')

    try{
        const {sub} = verify(
            token,
            process.env.JWT_SEGREDO
        ) as Payload

        return next()
    } catch (err) {
        return res.json({dados: 'Token Inválido'})    
    }
}