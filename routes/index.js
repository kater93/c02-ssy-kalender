const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kalender 4.0 - Return of the Microservices' });
});

module.exports = router;
