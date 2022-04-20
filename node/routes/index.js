var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'THBS' });
});
router.get('/source', function(req, res, next) {

  res.render('source', { title: 'THBS' });

});

module.exports = router;
