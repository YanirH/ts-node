import { ValidationError } from "./client-error";
import { Role } from "./enum";

export class UserModel {
    public id?: number ;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password?: string;
    public roleId: Role;
    public constructor (user: UserModel) {
        this.id = user.id
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.email = user.email
        this.password = user.password
        this.roleId = user.roleId
    }

    public validate() {
        if (!this.firstName) throw new ValidationError("first name is missing")
        if (!this.lastName) throw new ValidationError("last name is missing")
        if (!this.email) throw new ValidationError("rmail is missing")
        if (!this.password) throw new ValidationError("password is missing")
    }
}



