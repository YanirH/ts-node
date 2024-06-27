import { ValidationError } from "./client-error";
import { Role } from "./enum";

export class CredentialsModel {
   
    public email: string;
    public password?: string;
    
    public constructor (user: CredentialsModel) {
        this.email = user.email
        this.password = user.password
    }

    public validate() {
        if (!this.email) throw new ValidationError("rmail is missing")
        if (!this.password) throw new ValidationError("password is missing")
    }
}
