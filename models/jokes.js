// const mongoose = require('mongoose'); do we need mongoose?

var jokeSchema = {
  joke: String,
}

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
