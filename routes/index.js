var express = require('express');
var router = express.Router();
var mapping = require('./routeMapping.json')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home/index', { title: '3D Book' });
});
/* redirect */
router.get('/redirect', (req, res) => {
  let next = mapping[req.query.returnURL];
  res.render('loading', {next: next});
});
router.get('/home', (req, res) => { 
  res.render('home/board');
});
/* my United */
router.get('/my-united', (req, res) => {
  res.render('United/History');
});
module.exports = router;
