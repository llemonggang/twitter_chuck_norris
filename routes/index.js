var express = require('express');
var router = express.Router();
var Twit = require('twit')

var T = new Twit({
consumer_key:process.env.TWITTER_CONSUMER_KEY,
consumer_secret:process.env.TWITTER_CONSUMER_SECRET,
access_token:process.env.TWITTER_ACCESS_TOKEN,
access_token_secret:process.env.TWITTER_ACCESS_TOKEN_SECRET,
timeout_ms: 60*1000
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/tweets', function(req, res, next) {
  T.post('statuses/update', { status: req.body.joke }, function(err, data, response) {
  res.json(data);
})
});

module.exports = router;
