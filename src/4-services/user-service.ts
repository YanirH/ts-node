import { dal } from "../2-utils/dal"

class UserService {

    public async register () {
        const sql = " insert intp users values(?,?,?,?,?)"
        const values: [] = []
        const info = await dal.execute(sql, values)
        return info
    }

}

export const userService = new UserService()