var express = require('express');
var multer = require('multer');
var router = express.Router();

var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://postgres:123@localhost:5432/postgres");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/', function(req, res) {
//   db.query(req.body.request).then(function(data) {
//     console.log(data);
//     res.render('index', {request: req.body.request, response: JSON.stringify(data)});
//     query = data;
//   }).catch(function (err) {
//     console.log(err);
//     res.render('index', {request: req.body.request, response: "error"});
//   });
// });

module.exports = router;