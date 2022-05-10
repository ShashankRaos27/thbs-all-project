// var mysql = require('mysql2');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '2708',
//     database: 'api',
//     insecureAuth: true
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {

//     if (error) throw error;

//     console.log('The solution is: ', results[0].solution);

// });
// connection.end();

var mysql = require('mysql2');
require('dotenv').config();
let connection = function () {
    let mySql= mysql.createConnection({
        // host: 'localhost',
        // user: 'root',
        // password: '2708',
        // database: 'api',
        // insecureAuth : true
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD, //should be yours 
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        insecureAuth: true
    });
    return mySql;
};
module.exports.localConnect = connection;