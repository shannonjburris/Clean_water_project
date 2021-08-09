// Initialize and add the map
function initMap() {
    //generate map, and set center to the first coordinate pair in our results
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: new google.maps.LatLng(28.0395, -81.9498),
    });
}