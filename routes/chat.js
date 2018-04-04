var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('chat', { title: 'Socket.IO chat' });
});

module.exports = router;
