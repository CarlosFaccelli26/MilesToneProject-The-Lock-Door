
// Changing background color of navar when scrolling
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 80);
});


// Creating Accordion for Rules
var acc = document.getElementsByClassName('accordion');
var i;
    // Bucle For
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', ()=> {
        var panel = this.nextElementSibling;
        // Conditional if
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}


// Google API
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {
      lat: -32.6005666,
      lng: -58.0279122,
    },
  });
  // Creating Locations
  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var locations = [
    { lat: -34.68447788695522, lng: -55.69474062783808 },
    { lat: -34.682690690374955, lng: -55.70749049893516 },
    { lat: -34.69911739903683, lng: -55.51943811153038 },
    { lat: -34.677567119090575, lng: -55.756902494106626 },
  ];
  //Creating markers
  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
