import { StatusCode } from "./enum";


abstract class ClientError {
    public constructor(public status: number, public message: string) { }
}


export class ResourceNotFoundError extends ClientError {
    public constructor (id: number) {
        super(StatusCode.NotFound, `Item not found, id ${id} does not exsit`)
    }
}
export class RouteNotFoundError extends ClientError  {
    public constructor(route: string, method: string) {
        super(StatusCode.NotFound, `Route ${route} on method ${method} not exist`)
    }
}


