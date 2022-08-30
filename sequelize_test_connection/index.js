const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    hostname: config.host,
    dialect: config.dialect
});

const connectToDatabase = () => {
    sequelize.authenticate()
    .then( () => {
        console.log('\x1b[46m%s\x1b[0m',`Connection to database ${sequelize.config.database} has been established successfully`);
    })
    .catch( error => {
        console.log('\x1b[41m%s\x1b[0m','Unable to connect to database');
    });
};

module.exports = { sequelize, connectToDatabase };
