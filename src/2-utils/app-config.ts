    import dotenv from 'dotenv'

    dotenv.config();

    class AppConfig {
        public readonly port = process.env.PORT
        public readonly mySqlHost = process.env.MYSQL_HOST
        public readonly mySqlUser = process.env.MYSQL_USER
        public readonly mySqlPassword = process.env.MYSQL_PASSWORD
        public readonly mySqlDatabase = process.env.MYSQL_DATABASE

    }

    export const appConfig = new AppConfig()