import {Request, Response, NextFunction} from 'express'
import { StatusCode } from '../3-models/enum'

class SecurityMiddleware {
    public preventXssAttack(req: Request, res: Response, next: NextFunction) {

        for (const prop in req.body) {
            const value = req.body[prop]
            if(typeof value === "string" && value.includes("<script")){
                res.status(StatusCode.Forbidden).send('nice try')
                return
            }
        }
        next()
    }
}


export const securityMiddleware = new SecurityMiddleware()