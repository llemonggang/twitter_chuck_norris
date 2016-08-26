const mongoose = require('mongoose');

var jokeSchema = {
  joke: String,
}

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
