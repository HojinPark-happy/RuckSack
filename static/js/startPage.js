function initialize() {
  var input = document.getElementById('city_search');
  new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);