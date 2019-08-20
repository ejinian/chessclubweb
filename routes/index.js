var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GHS Chess Club - Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'GHS Chess Club - About Us' });
});

router.get('/training', function(req, res, next) {
  res.render('training', { title: 'GHS Chess Club - Training' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'GHS Chess Club - Contact'});
});

module.exports = router;
