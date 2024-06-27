import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { UserModel } from "../3-models/user-model";
import { Role } from "../3-models/enum";
import { Console } from "console";

class Cyber {

    private secretKey ="test"

    public genereateToken(user:UserModel): string {
        //remove password
        delete user.password
        // User Container
        const container = {user}
        //Expires
        const options: SignOptions = {expiresIn: "3h"}
        //Generate
        const token = jwt.sign(container, this.secretKey, options)

        return token

    }

    public isTokenValid (token: string|undefined) {
        try {
            if(!token) return false
            
            jwt.verify(token, this.secretKey)

            return true
        }
        catch (err: any) {
            return false
        }
    }

    public isAdmin(token: string): boolean {
        try {
        const container  = jwt.decode(token) as {user: UserModel}
        const user = container.user
        console.log(user);
        
        return user.roleId === Role.Admin 
    } catch(err: any) {
        return false
    }
    }

}

export const cyber = new Cyber()