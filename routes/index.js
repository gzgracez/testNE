var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ChangeTitle' });
});

router.get('/fun', function(req, res, next) {
  res.render('fun', { title: 'fun' });
});

module.exports = router;
