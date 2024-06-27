import { OkPacketParams } from "mysql2";
import { dal } from "../2-utils/dal";
import { UserModel } from "../3-models/user-model";
import { Role } from "../3-models/enum";
import { cyber } from "../2-utils/cyber";
import { CredentialsModel } from "../3-models/credentials-model";
import { UnauthorizedError } from "../3-models/client-error";

class UserService {

    public async register (user: UserModel) {

        user.validate()

        const sql = "INSERT INTO `users`(`firstName`,`lastName`,`email`,`password`,`roleId`) VALUES(?,?,?,?,?);";
        user.roleId = Role.User
        const values = [user.firstName, user.lastName, user.email, user.password, user.roleId]
        user.firstName = "ff"
        const info: OkPacketParams = await dal.execute(sql, values)
        user.id = info.insertId
        const token = cyber.genereateToken(user)
        return token        

    }

    public async login (credentials: CredentialsModel) {
        credentials.validate()
        const sql ="select * from users where email = ? and password = ?"
        const values = [credentials.email, credentials.password]
        const users = await dal.execute(sql, values)
        const user = users[0]
        if(!user) throw new UnauthorizedError("incorrect email or password")
        const token = cyber.genereateToken(user)
        return token
    }

}

export const userService = new UserService()