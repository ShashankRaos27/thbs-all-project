var express = require('express');
var router = express.Router();
let dbConnection = require('./../db/db').localConnect();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', (req, res, next) => {
  let{
     username,
     email,
     password
  } = req.body
  let insertcommand = `INSERT INTO support.login  (username,  password)
   VALUES ('${username}','${password}')`;
  dbConnection.query(insertcommand, (err, result) => {
    if (err) throw err;
    res.send("detailes are fetched from postman api detailes are inserted");
  });
})

router.post('/tickets', (req, res, next) => {
  let {
    // ticket_title,
    description,
    priority
  } = req.body
  let insertcommand1 = `INSERT INTO support.tickets (description,priority)
   VALUES ('${description}','${priority}')`;
  dbConnection.query(insertcommand1, (err, result) => {
    if (err) throw err;
   res.send("detailes are fetched from postman api detailes are inserted");
  });
})

router.get('/tickets', function (req, res, next) {
  dbConnection.query('SELECT * FROM support.tickets', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
  //res.send('respond with a resource');
});
module.exports = router;
