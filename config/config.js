require('dotenv').config();

module.exports = {
    "development": {
        "server_port": process.env.PORT,
        "database": process.env.DATABASE_NAME,
        "username": process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "dialect": "mysql"
    }
}
