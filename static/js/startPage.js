
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
const add_button = document.getElementById("add-button");
const tag_group = document.getElementById("tag-group");
const input = document.getElementById('city-search');

let newTag_group = [];

function deleteTag(event) {
    const tag = event.target.parentElement;
    tag_group.removeChild(tag);
    const cleanTag = newTag_group.filter(function(newTag) {
        return newTag.id !== parseInt(tag.id);
    })
    newTag_group = cleanTag;
}

if (add_button && tag_group){
    add_button.addEventListener( "click", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    const tag = document.createElement("SPAN");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "❌";
    deleteBtn.addEventListener("click", deleteTag);
    var att = document.createAttribute("class");
    att.value = "home-tag";
    tag.setAttributeNode(att);
    var tagtext = document.createTextNode(input.value);
    const newId = newTag_group.length + 1;

    tag.appendChild(tagtext);
    tag.appendChild(deleteBtn);
    tag.id = newId;
    tag_group.appendChild(tag);
});
}


