import { OkPacketParams } from "mysql2";
import { dal } from "../2-utils/dal";
import { UserModel } from "../3-models/user-model";

class UserService {

    public async register (user: UserModel) {

        user.validate()

        const sql = "INSERT INTO `users`(`firstName`,`lastName`,`email`,`password`,`roleId`) VALUES(?,?,?,?,?);";
        const values = [user.firsName, user.lastName, user.email, user.password, user.role]
        const info: OkPacketParams = await dal.execute(sql, values)
        user.id = info.insertId
        return user        

    }

}

export const userService = new UserService()