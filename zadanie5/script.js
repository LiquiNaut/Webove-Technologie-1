var map, directionsRenderer, directionsService;

function initMap() {
     directionsRenderer = new google.maps.DirectionsRenderer();
     directionsService = new google.maps.DirectionsService();

    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 48.151965, lng: 17.072995},
        zoom: 17,
    });


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

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // //busstops
    // var request = {
    //     location: google.maps.LatLng(48.151965, 17.072995),
    //     radius: 10000,
    //     types: ['bus_station']
    // };
    //
    // var service = new google.maps.places.PlacesService(map);
    //
    // service.nearbySearch(request, callback);
    //
    // function callback(results, status) {
    //     if (status === google.maps.places.PlaceServiceStatus.OK){
    //         for (var i = 0; i < results.length; i++){
    //             createBusMarkers(results[i]);
    //         }
    //     }
    // }
    //
    // function createBusMarkers(place) {
    //     var placeLoc = place.geometry.location;
    //     var marker = new google.maps.Marker({
    //         map: map,
    //         position: place.geometry.location
    //     });
    //
    //     google.maps.event.addListener(marker, 'click', function(){
    //         infoWindow.setContent(place.name);
    //         infoWindow.open(map, this);
    //     });
    // }

    //StreetView
    const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("streetView"),
        {
            position: {lat: 48.151965, lng: 17.072995},
            addressControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER,
            },
            linksControl: false,
            panControl: false,
            enableCloseButton: false,
        }
    );

    map.setStreetView(panorama);

}


function calculateAndDisplayRoute() {
    //calcDistance
    directionsRenderer.setMap(map);




    const selectedMode = document.getElementById("mode").value;
    directionsService.route(
        {
            origin: {
                query: document.getElementById("start").value,
            },
            destination: {lat: 48.1516870, lng: 17.0731559},
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
            destinations: [{lat: 48.151965, lng: 17.072995}],
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
                const distance = `${result.distance.text} (${result.duration.text})`;
                document.getElementById('distance').innerHTML = distance;
            }
        });
}

function busStop(){
    var obrazok = "bus-stop-pointer.png";
    map.setCenter({lat: 48.151965, lng: 17.072995});
    map.setZoom(16);

    var marker1 = new google.maps.Marker(
        {   position: { lat: 48.154821, lng: 17.074406},
            map:map,
            icon: obrazok
        });

    var marker2 = new google.maps.Marker(
        {   position: { lat: 48.154300, lng: 17.075101},
            map:map,
            icon: obrazok

        });

    var marker3 = new google.maps.Marker(
        {   position: { lat: 48.154803, lng: 17.075731},
            map:map,
            icon: obrazok

        });

    var marker4 = new google.maps.Marker(
        {   position:{ lat: 48.154300, lng: 17.076907},
            map:map,
            icon: obrazok

        });
    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
}



