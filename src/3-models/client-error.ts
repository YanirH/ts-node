import { StatusCode } from "./enum";


abstract class ClientError {
    public constructor(public status: number, public message: string) { }
}


export class ResourceNotFoundError extends ClientError {
    public constructor (id: number) {
        super(StatusCode.NotFound, `Item not found, id ${id} does not exsit`)
    }
}

