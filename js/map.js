function get_loc(){
	axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=#AIzaSyA7EsmyKLBgtl13SRV5Qn56cowFm2jQhII')
	.then(function(response){
		console.log(response);
		var lat, long;

		lat = response.data.location.lat;
		long = response.data.location.lng;
		console.log(lat, long)

	})
	.catch(function(error){
		console.log(error);
	});
}
get_loc();

navigator.geolocation.getCurrentPosition(loc => console.log(loc));