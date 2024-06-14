import {Request, Response, NextFunction} from 'express'
import { StatusCode } from '../3-models/enum'


class ErrorsMiddleware {
    public catchAll(err: any, req: Request, res: Response, next: NextFunction) {

        console.log(err)

        const statusCode = err.status || StatusCode.InternalServerError
        const message = err.message

        res.status(statusCode).send(message)
    }
}

export const errorsMiddleware = new ErrorsMiddleware()