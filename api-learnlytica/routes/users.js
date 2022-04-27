var express = require('express');
var router = express.Router();
let dbConnection = require('./../db/db').localConnect();

/* GET users listing. */
router.get('/', function (req, res, next) {
  dbConnection.query('SELECT * FROM api.user_profile', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
  // res.send('respond with a resource');
});

router.get('/profile', function (req, res, next) {
  dbConnection.query('select * from user_profile ', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  });
});
router.post('/profile', (req, res, next) => {
  let {
    username,
    email,
    password,
    first_name,
    last_name,
    job_title,
    salary,
    create_datetime
  } = req.body
  let querys = `insert into user_profile
 (username,email,password,first_name,last_name,job_title,salary,create_datetime)
 values ('${username}','${email}','${password}','${first_name}','${last_name}','${job_title}',${salary},'${create_datetime}')`;
  dbConnection.query(querys, (error, result, feild) => {

    if (error)  throw error;
    res.send("detailes are fetched from postman api detailes are inserted");
  })

});
// router.post('/profile', (req, res, next) => {



//   let {

//     username,

//     email,

//     password,

//     first_name,

//     last_name,

//     job_title,

//     salary,

//     create_datetime

//   } = req.body

//   // console.log(req.body);

// let insertcommand = `INSERT INTO user_profile (username, email, password, first_name,last_name,job_title,salary,create_datetime) VALUES ('${username}','${email}','${password}','${first_name}','${last_name}','${job_title}','${salary}','${create_datetime}')`;

//   dbConnection.query(insertcommand, (err, result) => {

//     if (err) throw err;

//     res.send("detailes are fetched from postman api detailes are inserted");

//   });
// })
router.post('/contact',function(req,res,next){

  console.log(req.body);

  res.send("i am post call");

});
module.exports = router;
