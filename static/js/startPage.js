
////////// Adding Google Maps Places API Autocomplete Listener to city_search Element//////////
function initialize() {
    var options = {
    types: ['(regions)']
    };

    var input = document.getElementById('city-search');
    new google.maps.places.Autocomplete(input, options);
}

google.maps.event.addDomListener(window, 'load', initialize);



////////// Adding "Hit Enter Key" Listener to "city_search" Element //////////
let add_button = document.getElementById("add-button");
let tag_group = document.getElementById("tag-group");
let input = document.getElementById('city-search');

if (add_button && tag_group){
    add_button.addEventListener( "click", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    var tag = document.createElement("SPAN");
    var att = document.createAttribute("class");
    att.value = "home-tag";
    tag.setAttributeNode(att);
    var tagtext = document.createTextNode(input.value);
    tag.appendChild(tagtext);
    tag_group.appendChild(tag);
});
}


