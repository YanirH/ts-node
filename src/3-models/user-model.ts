import { ValidationError } from "./client-error";
import { Role } from "./enum";

export class UserModel {
    public id?: number ;
    public firsName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role: Role;
    public constructor (user: UserModel) {
        this.id = user.id
        this.firsName = user.firsName
        this.lastName = user.lastName
        this.email = user.email
        this.password = user.password
        this.role = user.role
    }

    public validate() {
        if (!this.firsName) throw new ValidationError("first name is missing")
        if (!this.lastName) throw new ValidationError("last name is missing")
        if (!this.email) throw new ValidationError("rmail is missing")
        if (!this.password) throw new ValidationError("password is missing")
        if (!this.role) throw new ValidationError("role is missing")
    }
}



