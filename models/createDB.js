const mysql = require("mysql2");
const config = require('../config/config');


const connection = mysql.createConnection({
  host: config.host,
  user: config.username,
  password: config.password,
});


connection.query(
  `CREATE DATABASE IF NOT EXISTS disney`,
  (err, results) => {
    console.log('\x1b[46m%s\x1b[0m',results);
    console.log('\x1b[41m%s\x1b[0m',err);
  }
);


connection.end();
