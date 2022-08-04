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
    console.log(results);
    console.log(err);
  }
);


connection.end();
