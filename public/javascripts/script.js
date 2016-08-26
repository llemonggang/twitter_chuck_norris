$(document).ready(function () {
  postJoke()
  tweetJoke()
});

function postJoke() {
  $('#get-joke').on('click', function (e) {
    e.preventDefault();
    $('#get-new-joke').on('click', function (e) {
      e.preventDefault();
    })

    $.ajax({
      url: 'http://api.icndb.com/jokes/random/',
      }).done(function(data) {
        $('#joke').text(data.value.joke)
          console.log(data);
      });
  })
}

function tweetJoke() {
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: {
      joke: $('#joke').text()
    }
  }).done(function (data) {
    console.log(data);
    postJoke();
  })
}
