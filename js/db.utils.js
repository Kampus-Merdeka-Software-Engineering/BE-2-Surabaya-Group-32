const mysql = require("mysql");
require('dotenv').config()

var connection = mysql.createPool({
    timeout: 60 * 60 * 1000,
    connectTimeout: 20000,  
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    insecureAuth: true,
  });
  
  module.exports = connection;