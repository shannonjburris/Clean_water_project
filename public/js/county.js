const algaeObserved = document.getElementById('algae-result');
const algaeType = document.getElementById('algae-type');
const algaeLocation = document.getElementById('algae-location');
const algaeDate = document.getElementById('algae-date');
const algaeComments = document.getElementById('algae-comments');
const commentRow = document.querySelector('.comments');

submitSearchFrom = async (event) => {
    event.preventDefault();

    let county = document.getElementById('counties').value;
    let algae = document.getElementById('algae-observed').checked;
    // events defind in dbqueries 
    if (county) {
        findData(county, algae);
    }
    else {
        return;
    }
}

function findData(county, algae) {
    fetch(`/api/counties/${county}/${algae}`)
        .then(response => response.json())
        .then((data) => {
            //initialize map, center over the first result
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 9,
                center: new google.maps.LatLng(data[0].lat, data[0].lon),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            //initialize markers so the user can interact with them
            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            //add markers to the map from the results
            for (i = 0; i < data.length; i++) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(data[i].lat, data[i].lon),
                    map: map
                });

                //Add first result to info card on search
                algaeObserved.innerHTML = data[0].algae_observed;
                algaeLocation.innerHTML = data[0].location;
                algaeType.innerHTML = data[0].algae_type;
                //remove time from returned date
                const date = data[0].site_visit_date.split(" ");
                algaeDate.innerHTML = date[0];

                //only show comments if they exist
                if (data[0].comments) {
                    commentRow.style.visibility = "visible";
                    algaeComments.innerHTML = data[0].comments;
                } else { commentRow.style.visibility = "hidden"; }

                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        //when user clicks on markers, show the location info on map
                        infowindow.setContent(data[i].location);
                        infowindow.open(map, marker);

                        //update info card when user interacts with map
                        algaeObserved.innerHTML = data[i].algae_observed;
                        algaeLocation.innerHTML = data[i].location;
                        algaeType.innerHTML = data[i].algae_type;
                        //remove time from returned date
                        const date = data[i].site_visit_date.split(" ");
                        algaeDate.innerHTML = date[0];

                        //only show comments if they exist
                        if (data[i].comments) {
                            commentRow.style.visibility = "visible";
                            algaeComments.innerHTML = data[i].comments;
                        } else { commentRow.style.visibility = "hidden"; }

                    }
                })(marker, i));
            }
        }
        );
};

const submitSearch = document.getElementById('county-search');
submitSearch.addEventListener('submit', submitSearchFrom);