const mysql = require("mysql2");
//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MySql username,
        user: 'root',
        //Your MySql password
        password: 'Veronichka88$$',
        database: 'election'
    });

    module.exports = db;