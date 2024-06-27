import express, {Request, Response, NextFunction} from 'express'
import { UserModel } from '../3-models/user-model';
import { userService } from '../4-services/user-services';
import { StatusCode } from '../3-models/enum';
import { CredentialsModel } from '../3-models/credentials-model';

class UserController {

    public readonly router = express.Router()

    public constructor() {
        this.router.post('/register', this.register)
        this.router.post('/login', this.login)
    }

    private async register(req: Request, res: Response, next: NextFunction) {

        try {
        const user = new UserModel(req.body)
        const token = await userService.register(user)
        res.status(StatusCode.Created).json(token)
        }
        catch (err: any) {
            next(err)
        }
    }

    private async login(req: Request, res: Response, next: NextFunction) {

        try {
        const credentials = new CredentialsModel(req.body)
        const token = await userService.login(credentials)
        res.json(token)

        }
        catch (err: any) {
            next(err)
        }
    }



}

export const userController = new UserController()