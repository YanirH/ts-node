import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../3-models/enum';
import { RouteNotFoundError } from '../3-models/client-error';

class ErrorsMiddleware {
    public catchAll(err: any, req: Request, res: Response, next: NextFunction) {
        console.log(JSON.stringify(err)); // Log the error for debugging

        const statusCode = err.status || StatusCode.InternalServerError;
        const message = err.message || 'Internal Server Error';

        // Send a properly formatted JSON response
        res.status(statusCode).json({ message, statusCode });
    }

    public routeNotFound(req: Request, res: Response, next: NextFunction) {
        const err = new RouteNotFoundError(req.originalUrl, req.method);
        next(err);
    }
}

export const errorsMiddleware = new ErrorsMiddleware();