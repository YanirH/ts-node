import express, {Request, Response, NextFunction} from 'express'
import { appConfig } from './2-utils/app-config';
import { productController } from './5-controllers/producs';
import { employeesController } from './5-controllers/employees';

const server = express();

server.use('/', productController.router)
server.use('/', employeesController.router)

server.listen(appConfig.port, ()=> {
    console.log('listening on http://localhost:' + appConfig.port)
})