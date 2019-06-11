function get_loc(){
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

/*function showPosition(position){
	var lat, lng;
	window.lat = position.coords.latitude;
	window.lng = position.coords.longitude;
	console.log(window.lat,window.lng);
}*/

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: window.lat, lng: window.long },
		zoom: 14
	});

	/*google.maps.event.addEventListener(map, 'click',
		function(event){

		});*/
}

f/*unction addMarker(lat, lng){
	var marker = new google.maps.Marker({
		position : coords,
		map : map
	});
}
addMarker(window.lat, window.lng);*/