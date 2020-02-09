$(document).ready(function() {
  $.getJSON("https://api.teleport.org/api/continents/", function( data ) {

    //  Get and set the contents of the continent checkboxes
    continentData = data['_links']['continent:items'];
    setContinents(continentData);


  });
})


//  METHOD: Sets the contents of the continent checkboxes
//  PARAMS: continentData -> array of JSON data consisting of continents
function setContinents(continentData) {
  continentData.forEach( function (obj){
        $('#continentList').append($('<option></option>').attr('value', obj.name).text(obj.name));
    });

}



