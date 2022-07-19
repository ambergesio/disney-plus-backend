const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {
    hostname: 'localhost',
    dialect: 'mysql'
});

const connectToDatabase = () => {
    sequelize.authenticate()
    .then( () => {
        console.log(`Connection to database ${config.db_name} has been established successfully`);
    })
    .catch( error => {
        console.log('Unable to connect to database', error);
    });
};

module.exports = {sequelize, connectToDatabase };
