function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.3637794, lng: -71.0992999},
          zoom: 10,
          styles:
          [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f1dff1"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ebc2c6"
                    }
                ]
            }
        ]
        });

    var markerVenue = new google.maps.Marker({
      position: {lat: 42.306818, lng: -71.180765},
      map: map,
      animation: google.maps.Animation.DROP,
    });

    var markerHotel = new google.maps.Marker({
      position: {lat: 42.3339602, lng: -71.2566078},
      map: map,
      animation: google.maps.Animation.DROP,
    });

    var markerAirport = new google.maps.Marker({
      position: {lat: 42.3656132, lng: -71.0095602},
      map: map,
      animation: google.maps.Animation.DROP,
    });

    var contentStringVenue =
      '<div id="markertitle">'+
      'Darnell Residence' +
      '</div>'

    var contentStringHotel =
      '<div id="markertitle">'+
      'Hotel Indigo' +
      '</div>'

    var contentStringAirport =
      '<div id="markertitle">'+
      'Boston Logan Airport' +
      '</div>'

    var infowindowVenue = new google.maps.InfoWindow({
      content: contentStringVenue
    });

    var infowindowHotel = new google.maps.InfoWindow({
      content: contentStringHotel
    });

    var infowindowAirport = new google.maps.InfoWindow({
      content: contentStringAirport
    });

    infowindowVenue.open(map, markerVenue)
    infowindowHotel.open(map, markerHotel)
    infowindowAirport.open(map, markerAirport)

    markerVenue.addListener('click', function() {
      infowindowVenue.open(map, markerVenue);
    });
    markerHotel.addListener('click', function() {
      infowindowHotel.open(map, markerHotel);
    });
    markerAirport.addListener('click', function() {
      infowindowAirport.open(map, markerAirport);
    });
}
