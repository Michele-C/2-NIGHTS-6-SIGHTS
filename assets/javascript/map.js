function initMap() {
    var claremap = new google.maps.Map(document.getElementById("map"),{
        zoom: 7,
        center: {
            lat:  52.847054,
            lng: -8.988436
        }
    });

    var labels = "ABCDEFGHIJKLM";

    var locations = [{
        lat: 52.93499626, 
        lng: -9.46916479
    }, {
        lat: 53.0499998, 
        lng: -9.0999996
    }, { 
        lat: 52.6999972, 
        lng:-8.8166634
    }, {
        lat: 53.043896410898, 
        lng: -9.0464687347412
    }, {
        lat: 52.93845840, 
        lng: -9.29322700
    }, {
        lat: 53.130965219963734, 
        lng:-9.047364555628008
    },{
        lat: 52.786830186, 
        lng: -8.903163054
    }, {
        lat: 52.847054, 
        lng: -8.988436
    }, {
        lat: 53.016029, 
        lng: -9.377420
    }];

var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
// Marker Clusterer 
            var markerCluster = new MarkerClusterer(claremap, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }