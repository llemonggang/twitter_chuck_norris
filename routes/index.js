var express = require('express');
var router = express.Router();
// var Twit = require('twit')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/tweets', function (req, res, next, id) {
  var newJoke = (req.query.id)
  console.log(newJoke);
  res.newJoke.send()
})

//
// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data)
//
//
//   var T = new Twit({
//     consumer_key:'0tQdW8DMfZEDfRQbr72UwUC2O',
//     consumer_secret:'eI1QUiwxnOrBkGgnLJ5sZtLIikIG6JDSbbuFSFCD52ckWSfHFz',
//     access_token:         '...',
//     access_token_secret:  '...',
//     timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
//   })
// var T = new Tweets {
// TWITTER_CONSUMER_KEY=0tQdW8DMfZEDfRQbr72UwUC2O
// TWITTER_CONSUMER_SECRET=eI1QUiwxnOrBkGgnLJ5sZtLIikIG6JDSbbuFSFCD52ckWSfHFz
// TWITTER_ACCESS_TOKEN=4247411773-hEnIuRDHDre5GQsllBuMQSRUndaBCY2LPWzYVcx
// TWITTER_ACCESS_TOKEN_SECRET=cmGMZXMy9cVLO7e9giusDABhMVHZLLvKr2qmimHG1LrXT
// }

module.exports = router;
