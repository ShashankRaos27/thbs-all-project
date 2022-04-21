var express = require('express');
var router = express.Router();
let databseConnection = require('./../db/db').localConnect();

router.get('/getinfo', function (req, res, next) {
  databseConnection.query('select * from support_ticket.ticket', (error, result, feild) => {
    if (error) throw error;
    res.send(result);
  });
});

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/tckno', (req, res, next) => {
  let {
    username,
    ticketid,
    ticketQuestion,
    ticket_date
  } = req.body
  let insertQuery = `insert into support_ticket.ticket
  (username,ticketid,ticketQuestion,ticket_date)
  values('${username}','${ticketid}','${ticketQuestion}','${ticket_date}')`;
  databseConnection.query(insertQuery, (error, result, feild) => {
    if (error) throw error;
    res.send("detailes are fetched from postman api detailes are inserted");
  });
});
router.post('/tickets', (req, res, next) => {
  let {
    // ticket_title,
    description,
    priority

  } = req.body
  let insertcommand1 = `INSERT INTO support.tickets (description,priority)
   VALUES ('${description}','${priority}')`;

   databseConnection.query(insertcommand1, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });
})



router.get('/tickets', function (req, res, next) {
  databseConnection.query('SELECT * FROM support.tickets', (error, results, fields) => {
    if (error) throw error;
   res.send(results);

  });

  //res.send('respond with a resource');
});
module.exports = router;
