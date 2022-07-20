const { Sequelize } = require('sequelize');
const config = require('../config/config').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
    hostname: config.host,
    dialect: config.dialect
});

const connectToDatabase = () => {
    sequelize.authenticate()
    .then( () => {
        console.log(`Connection to database ${sequelize.config.database} has been established successfully`);
    })
    .catch( error => {
        console.log('Unable to connect to database');
    });
};

module.exports = {sequelize, connectToDatabase };
