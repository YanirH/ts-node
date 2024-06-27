import express, {Request, Response, NextFunction} from 'express'
import { appConfig } from './2-utils/app-config';
import { productController } from './5-controllers/product-controller';
import { employeesController } from './5-controllers/employees';
import { securityMiddleware } from './6-middleware/security-middleware';
import { errorsMiddleware } from './6-middleware/error-middleware';
import { userController } from './5-controllers/user-conroller';
import expressFileUpload from "express-fileupload"
import { fileSaver } from 'uploaded-file-saver';
import cors from "cors"
import path from 'path';


fileSaver.config(path.join(__dirname, "1-assets", "images"))

const server = express();

server.use(express.json(), expressFileUpload(), cors())

// Register middleware: 
// server.use(logsMiddleware.logRequest);
server.use(securityMiddleware.preventXssAttack);

server.use('/api', productController.router)
server.use('/api', employeesController.router)
server.use('/api', userController.router)

// error middleware
server.use("*", errorsMiddleware.routeNotFound);
server.use(errorsMiddleware.catchAll);





server.listen(appConfig.port, ()=> {
    console.log('listening on http://localhost:' + appConfig.port)
})