var express = require('express');
var router = express.Router();
var Joke = require('../models/jokes.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/tweets', function (req, res, next) {
  var newJoke = new Joke (req.object.value)
  newJoke.save(function(err) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(newJoke)
    }
  })
})

module.exports = router;
