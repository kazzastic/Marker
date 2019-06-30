/*function get_loc(){
	axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyA7EsmyKLBgtl13SRV5Qn56cowFm2jQhII')
	.then(function(response){
		console.log(response);
		var lat, long;

		window.lat = response.data.location.lat;
		window.long = response.data.location.lng;
		console.log(window.lat, window.long)

	})
	.catch(function(error){
		console.log(error);
	});
}
get_loc();*/

/*function showPosition(position){
	var lat, lng;
	window.lat = position.coords.latitude;
	window.lng = position.coords.longitude;
	console.log(window.lat,window.lng);
}*/
var map, infoWindow, marker, pos;
var latitude, longitude;
var show;
var markerz = [];
//window.localStorage.setItem('show', show);

function initMap() {
	var uluru = {lat: 24.953559, lng: 67.059568};
	map = new google.maps.Map(document.getElementById('map'), {
  		center: uluru,
  		zoom: 20
	});
	infoWindow = new google.maps.InfoWindow;

	//event creating marker
	google.maps.event.addListener(map, 'click', function(event){
		addMarker({coords: event.latLng});
		latitude = event.latLng.lat();
		longitude = event.latLng.lng();
		
		show = window.localStorage.getItem('show');
		show = parseInt(show);
		show = show +1;
		window.localStorage.setItem('show', show);
		markerz[show] = new Object();
		markerz[show].lat = latitude;
		markerz[show].lng = longitude;
		
		console.log(markerz[show]);
	});	

	function addMarker(props){
		marker = new google.maps.Marker({
			position : props.coords,
			map : map
		});

		if(props.content){
			var infoWindow = new google.maps.InfoWindow({
            	content:props.content
          	});

			marker.addListener('click', function(){
				infoWindow.open(map, marker);
				console.log(props.coords);
			});

		}
	}


	// Try HTML5 geolocation.
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
	    pos = {
	      lat: position.coords.latitude,
	      lng: position.coords.longitude
	    };

	    infoWindow.setPosition(pos);
	    infoWindow.setContent("You're Here!");
	    infoWindow.open(map);
	    map.setCenter(pos);
	  }, function() {
	    handleLocationError(true, infoWindow, map.getCenter());
	  });
	} 
	else {
	  // Browser doesn't support Geolocation
	  handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
	                      'Error: The Geolocation service failed.' :
	                      'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}
