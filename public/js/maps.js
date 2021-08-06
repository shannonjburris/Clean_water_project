
var lat = JSON.parse(localStorage.getItem("latitude"));
var long = JSON.parse(localStorage.getItem("longitude"));

/* 
set locations as empty array, and then loop through the localstorage and match each lat/lon into arrays 

Note: use parseFloat to retain decimal points for coordinates 
*/
setTimeout(initMap, 50000);
var locations = [];
for (let index = 0; index < lat.length; index++) {
    locations.push([parseFloat(lat[index]), parseFloat(long[index])])
}

// Initialize and add the map
function initMap() {
console.log(locations);
    //generate map, and set center to the first coordinate pair in our results
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: new google.maps.LatLng(locations[0][0], locations[0][1]),
    });

    //loop through our coordinate pairs and create a marker for each one 
    for (i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
            map: map
        });
    }
}
