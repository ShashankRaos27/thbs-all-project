var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', { title: 'Express', mylabel: 'THBS' });

});

router.get('/contact', function (req, res, next) {

  res.render('contact', { title: 'Express', mobile: '9876098' });

});

module.exports = router;
