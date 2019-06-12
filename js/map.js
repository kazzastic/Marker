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


//Global varibales for google api
var map;
var lat, lng;
function initMap() {

	//API that calls the gelocation of the person, meaning where he/she is right at this moment
	axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyA7EsmyKLBgtl13SRV5Qn56cowFm2jQhII')
	.then(function(response){
		console.log(response);
		lat = response.data.location.lat;
		lng = response.data.location.lng;
		console.log(lat, lng);

	})
	.catch(function(error){
		console.log(error);
	});

	//creating the map and showing the current location of the user
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: parseFloat(lat), lng: parseFloat(lng) },
		zoom: 14
	});
}
