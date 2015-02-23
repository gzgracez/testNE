var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users Page');
});


router.get('/start', function(req, res, next) {
  res.send('Start Page');
});

module.exports = router;
