function init() {
    // Koordinat lokasi Uncle Vape Jambi
    var lokasi = { lat: -1.610534, lng: 103.613198 };

    var mapOptions = {
        zoom: 17,
        center: lokasi,
        scrollwheel: false,
        styles: [
            {
                featureType: "administrative.land_parcel",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "landscape.man_made",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road",
                elementType: "labels",
                stylers: [{ visibility: "simplified" }, { lightness: 20 }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ hue: "#f49935" }]
            },
            {
                featureType: "road.highway",
                elementType: "labels",
                stylers: [{ visibility: "simplified" }]
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ hue: "#fad959" }]
            },
            {
                featureType: "road.arterial",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{ visibility: "simplified" }]
            },
            {
                featureType: "road.local",
                elementType: "labels",
                stylers: [{ visibility: "simplified" }]
            },
            {
                featureType: "transit",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "water",
                elementType: "all",
                stylers: [{ hue: "#a1cdfc" }, { saturation: 30 }, { lightness: 49 }]
            }
        ]
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: lokasi,
        map: map,
        title: 'Uncle Vape Jambi',
        icon: 'images/loc.png' // Ganti jika ikon kamu berbeda
    });
}

google.maps.event.addDomListener(window, 'load', init);
