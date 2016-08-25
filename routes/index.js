var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

$(document).ready(function () {

  $('#get-joke').on('click', function (e) {
    e.preventDefault();

    $.ajax({
      url: 'http://api.icndb.com/jokes/random/',
    }).done(function (data) {
      console.log(data);
    })
  })



});

module.exports = router;
