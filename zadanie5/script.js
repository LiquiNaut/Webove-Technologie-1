let map;

let directionsService;
let directionsRenderer;

function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.1516870, lng: 17.0731559 },
        zoom: 17,
    });

    //StreetView
    const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("streetView"),
        {
            position: { lat: 48.1516870, lng: 17.0731559 },
            pov: {
                heading: 34,
                pitch: 10,
            },
            linksControl: false,
            panControl: false,
            enableCloseButton: false,
        }
    );


    map.setStreetView(panorama);
    directionsRenderer.setMap(map);


    //MapMarker
    let marker = new google.maps.Marker({
        position: {lat: 48.151965, lng: 17.072995},
        map: map,
        title: "FEI STU",
        draggable: true,
        animation: google.maps.Animation.BOUNCE
    });

    const contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">FEI STU</h1>' +
        '<div id="bodyContent">' +
        "<p>The Faculty of Electrical Engineering and Informatics of the Slovak " +
        "University of Technology (abbreviation <b>FEI STU</b>) is one of the seven " +
        "faculties of the Slovak University of Technology in Bratislava " +
        "It is the oldest technical faculty in Slovakia focused on electrical engineering,  " +
        "informatics and related fields. " +
        "They are located on Ilkovicova street no. 3 in Bratislava in the " +
        "Karlova Ves district. The faculty building also houses the National " +
        "Robotics Center and the International Laser Center.</p> " +

        '<p><b>GPS location:</b> lat: 48.151965, lng: 17.072995 </p>' +
        '<p><a href="https://www.fei.stuba.sk">' +
        "www.fei.stuba.sk/</a></p> " +
        "</div>" +
        "</div>";

    const infoWindow = new google.maps.InfoWindow({
        content: contentString,
    });


    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });


    const onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };

    document.getElementById("calcDist").addEventListener("click", onChangeHandler);

    //busstops
    var request = {
        location: google.maps.LatLng(48.151965, 17.072995),
        radius: 10000,
        types: ['bus_station']
    };

    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlaceServiceStatus.OK){
            for (var i = 0; i < results.length; i++){
                createBusMarkers(results[i]);
            }
        }
    }

    function createBusMarkers(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent(place.name);
            infoWindow.open(map, this);
        });
    }
}

//calcDistance
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const selectedMode = document.getElementById("mode").value;
    directionsService.route(
        {
            origin: {
                query: document.getElementById("start").value,
            },
            destination: { lat: 48.1516870, lng: 17.0731559 },
            travelMode: google.maps.TravelMode[selectedMode],
        },
        (response, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
            origins: [document.getElementById("start").value],
            destinations: [{ lat: 48.1516870, lng: 17.0731559 }],
            travelMode: google.maps.TravelMode[selectedMode],
            avoidHighways: false,
            avoidTolls: false,
        },
        (response, status) => {
            if (status !== "OK") {
                alert("Error was: " + status);
            } else {
                const result = response.rows[0].elements[0]
                console.log(result, response.rows)
                document.getElementById('distance').innerHTML = `${result.distance.text} (${result.duration.text})`;
            }
        });


}




