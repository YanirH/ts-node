import { dal } from "../2-utils/dal"
import { UserModel } from "../3-models/user-model"

class UserService {

    public async register (user: UserModel) {
        const sql = " insert intp users values(?,?,?,?,?)"
        const values: [] = []
        const info = await dal.execute(sql, values)
        return info
    }

}

export const userService = new UserService()