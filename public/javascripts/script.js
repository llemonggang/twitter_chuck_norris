$(document).ready(function () {

  $('#get-joke').on('click', function (e) {
    e.preventDefault();

    $.ajax({
      url: 'http://api.icndb.com/jokes/random/',
      method: 'GET'
    }).done(function (data) {
      console.log('working');
    })


  });

});
