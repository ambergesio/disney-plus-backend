require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    db_name: process.env.DATABASE_NAME,
    db_user: process.env.DATABASE_USER,
    db_password: process.env.DATABASE_PASSWORD
};

module.exports = config;
