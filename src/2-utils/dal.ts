import mysql2, { PoolOptions, QueryError} from "mysql2"
import { appConfig } from "./app-config"

class Dal {

    private options: PoolOptions = {
        host: appConfig.mySqlHost,
        user: appConfig.mySqlUser,
        password: appConfig.mySqlPassword,
        database: appConfig.mySqlDatabase
    }
    private readonly connection = mysql2.createPool(this.options)

    public execute(sql: string, values?: any[]): any {
        return new Promise<any>((resolve, reject ) => {
            this.connection.query(sql, values, (err: QueryError | null, result: any) => {
                if(err) {
                    reject(err)
                    console.log(err)
                }
                else {
                    resolve(result)
                }
            })
        })

    }

}


export const dal = new Dal()