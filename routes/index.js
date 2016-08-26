var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/tweets', function (req, res, next) {
  var newJoke = (res.value)
  console.log(newJoke);
  // newJoke(function(err) {
  //   if (err) {
  //     res.status(500).send()
  //   } else {
  //     res.json(newJoke)
  //   }
  // })
})

module.exports = router;

// var T = new Tweets {
// TWITTER_CONSUMER_KEY=0tQdW8DMfZEDfRQbr72UwUC2O
// TWITTER_CONSUMER_SECRET=eI1QUiwxnOrBkGgnLJ5sZtLIikIG6JDSbbuFSFCD52ckWSfHFz
// TWITTER_ACCESS_TOKEN=4247411773-hEnIuRDHDre5GQsllBuMQSRUndaBCY2LPWzYVcx
// TWITTER_ACCESS_TOKEN_SECRET=cmGMZXMy9cVLO7e9giusDABhMVHZLLvKr2qmimHG1LrXT
// }
//
// T.post ('status/tweets') {post: tweet}//twit library to post to twitter
