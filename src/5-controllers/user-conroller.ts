import express, {Request, Response, NextFunction} from 'express'
import { UserModel } from '../3-models/user-model';
import { userService } from '../4-services/user-service';
import { StatusCode } from '../3-models/enum';

class UserController {

    public readonly router = express.Router()

    public constructor() {
        this.router.get('', );
        this.router.get('', )
        this.router.post('/user', this.register )
        this.router.delete('', )
        this.router.put('', )
    }

    private async register(req: Request, res: Response, next: NextFunction) {

        try {
        const user = new UserModel(req.body)
        const addedUser = await userService.register(user)
        res.status(StatusCode.Created).json(addedUser)
        }
        catch (err: any) {
            next(err)
        }
    }



}

export const userController = new UserController()