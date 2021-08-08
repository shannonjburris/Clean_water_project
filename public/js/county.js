// const sequelize = require('./config/connection')

submitSearchFrom = async (event) => {
    event.preventDefault();

    let county    = document.getElementById('counties').value;
    let micro     = document.getElementById('micro').checked;
    let comments  = document.getElementById('algae-observed').checked;
    // events defind in dbqueries 
    if (county) {
        findData(county, micro, comments);   
    }
    else {
        return;
    }
}

function findData(county, micro, comments) {
    fetch(`/api/counties/${county}/${micro}/${comments}`)
        .then(response => response.json())
        .then((data) => {

            console.log(data);
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: new google.maps.LatLng(data[0].lat, data[0].lon),
            });

            for (i = 0; i < data.length; i++) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(data[i].lat, data[i].lon),
                    map: map
                });
            }

            }
        );
    };





const submitSearch = document.getElementById('county-search');
submitSearch.addEventListener('submit', submitSearchFrom);