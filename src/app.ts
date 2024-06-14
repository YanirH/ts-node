import express, {Request, Response, NextFunction} from 'express'
import { appConfig } from './2-utils/app-config';
import { productController } from './5-controllers/product-controller';
import { employeesController } from './5-controllers/employees';
import { securityMiddleware } from './6-middleware/security-middleware';
import { errorsMiddleware } from './6-middleware/error-middleware';

const server = express();

server.use(express.json())

// Register middleware: 
// server.use(logsMiddleware.logRequest);
server.use(securityMiddleware.preventXssAttack);

// error middleware
server.use(errorsMiddleware.catchAll);
// server.use("*", errorsMiddleware.routeNotFound);



server.use('/', productController.router)
server.use('/', employeesController.router)

server.listen(appConfig.port, ()=> {
    console.log('listening on http://localhost:' + appConfig.port)
})