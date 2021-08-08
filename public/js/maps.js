
// var lat = JSON.parse(localStorage.getItem("latitude"));
// var long = JSON.parse(localStorage.getItem("longitude"));

/* 
set locations as empty array, and then loop through the localstorage and match each lat/lon into arrays 

Note: use parseFloat to retain decimal points for coordinates 
*/
// setTimeout(initMap, 500);
// var locations = [];
// for (let index = 0; index < lat.length; index++) {
//     locations.push([parseFloat(lat[index]), parseFloat(long[index])])
// }


// Initialize and add the map
function initMap() {
    console.log('hey');
    //generate map, and set center to the first coordinate pair in our results
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: new google.maps.LatLng(28.0395, -81.9498),
    });
}

// initMap();