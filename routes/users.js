var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/start', function(req, res, next) {
  res.send('LEVEL START');
});

module.exports = router;
