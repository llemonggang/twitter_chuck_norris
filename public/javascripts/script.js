$(document).ready(function () {
  postJoke()

});

function postJoke() {
  $('#get-joke').on('click', function (e) {
    e.preventDefault();

    $.ajax({
      url: 'http://api.icndb.com/jokes/random/',
      method: 'GET'
      }).done(function(data) {
          console.log(data);
          var joke = data;
      });
  })
}
