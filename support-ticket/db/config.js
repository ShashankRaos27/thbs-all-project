var mysql      = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '2708',
  database : 'support_ticket',
  insecureAuth : true

});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();