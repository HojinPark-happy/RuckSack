function initialize() {
   var options = {
    types: ['(cities)']
   };

  var input = document.getElementById('city_search');
  new google.maps.places.Autocomplete(input, options);

}

google.maps.event.addDomListener(window, 'load', initialize);