var mysql = require('mysql2');
let connection = function () {
    let mySql= mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2708',
        database: 'support_ticket',
        insecureAuth : true
    });
    return mySql;
};
module.exports.localConnect = connection;