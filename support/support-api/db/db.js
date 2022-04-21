var mysql = require('mysql2');

let mysqlConnect = function () {



    return mysql.createConnection({



        host: 'localhost',

        user: 'root',

        password: '2708',

        database: 'support',

        insecureAuth: true

    });



};

module.exports.localConnect = mysqlConnect;