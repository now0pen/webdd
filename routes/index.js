var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lyndaRspa', function(req, res, next) {
  res.render('lyndaRspa', { title: 'Responsive Singe Page Apps' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Table of Contents' });
});

module.exports = router;
