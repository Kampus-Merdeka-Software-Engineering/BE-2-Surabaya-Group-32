const mysql = require("mysql");
require('dotenv').config()

try {
    var connection = mysql.createPool({
        timeout: 60 * 60 * 1000,
        connectTimeout: 90000,  
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE,
        insecureAuth: true,
      });
      console.log("Connected to the database.");

        connection.query("SELECT * FROM articles", (err, res) => {
            if (err) throw err;
            console.log(res);
            connection.end();
        });
} catch (error) {
    console.log(error);
}
  