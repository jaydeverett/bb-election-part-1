document.addEventListener("DOMContentLoaded", function() {

  var candidates = document.getElementById('candidates');

  $.ajax( {
  url: 'https://bb-election-api.herokuapp.com/',
  method: 'GET',
  dataType: 'json'

  } ).done( function( data ) {
      console.log("request succeeded");
      console.log(data);

      for (var i = 0; i < data.candidates.length; i++) {

      var name = data.candidates[i].name
      var votes = data.candidates[i].votes

      var myElement = document.createElement( 'div');
      myElement.innerHTML = name + ': ' + votes;
      candidates.append( myElement );

        }
    })

    })
  // Imagination!
