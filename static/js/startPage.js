
var continentLinkArray = $.getJSON("https://api.teleport.org/api/continents/", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

var continentArray = continentLinkArray["_links"]["continent:items"]

var cbh = document.getElementById('continent-search');
document.getElementById("A").innerText = continentLinkArray.toString();

for (var i in continentArray) {
  //Name of checkboxes are their number so I convert the i into a string.
  var cb = document.createElement('input');
  var label = document.createElement("label");
  continent = continentArray[i]["name"];
  var text = document.createTextNode(continent);
  cb.type = 'checkbox';
  cbh.appendChild(cb);
  cb.name = continent;
  cb.value = continentArray.indexOf(continent);
  label.appendChild(cb);
  label.appendChild(text);
  cbh.appendChild(label);
  cb.addEventListener('click', updateText);
}
updateText();

//function which update the text area according to which checkbox is selected or not
function updateText() {
  t.value = [null, ...document.querySelectorAll('#checkboxes [type="checkbox"]')].reduce((s, el) => el && el.checked ? s = (s || '') + el.value + '$#' : s || '');
}
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
  return function( elem ) {
    return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
  };
});

function updateCheckboxes(x) {
  if ($('#SearchBar').val() == '') {
    $('#checkboxes > label').show();
  } else {
    $('#checkboxes > label').hide();
    $('#checkboxes > label:contains('+$('#SearchBar').val()+')').show();
  }
}
