document.addEventListener('DOMContentLoaded', function() {
    const mapOptions = {
        center: new google.maps.LatLng(34.0522, -118.2437), // Central location to start the map
        zoom: 2
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Example data: Array of objects with manufacturer data
    const manufacturers = [
        { name: "Manufacturer A", lat: 31.2304, lng: 121.4737 },
        { name: "Manufacturer B", lat: 22.3193, lng: 114.1694 },
        { name: "Manufacturer C", lat: 37.7749, lng: -122.4194 }
        // Add more manufacturers as needed
    ];

    manufacturers.forEach(function(manufacturer) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(manufacturer.lat, manufacturer.lng),
            map: map,
            title: manufacturer.name
        });
    });
});

