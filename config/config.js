require('dotenv').config();

const enviroment = {
    "development": {
        server_port: process.env.PORT,
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        secret: process.env.SECRET,
        fepath: process.env.FRONTPATH,
        email_api_key: process.env.SENDGRID_API_KEY,
        email_sender: process.env.EMAIL_SENDER
    },
    "production": {
        server_port: process.env.PORT,
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        secret: process.env.SECRET,
        fepath: process.env.FRONTPATH,
        email_api_key: process.env.SENDGRID_API_KEY,
        email_sender: process.env.EMAIL_SENDER
    }
};

const currentEnviroment = process.env.ENVIROMENT || 'development';

const config = enviroment[currentEnviroment];

module.exports = config;
