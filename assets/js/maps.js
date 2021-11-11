// Google API
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {
      lat: -32.6005666,
      lng: -58.0279122,
    },
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });

  // Creating Locations
  var locations = [
    { lat: -34.68447788695522, lng: -55.69474062783808 },
    { lat: -34.682690690374955, lng: -55.70749049893516 },
    { lat: -34.69911739903683, lng: -55.51943811153038 },
    { lat: -34.677567119090575, lng: -55.756902494106626 },
  ];
  
  //Creating markers
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });


    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
