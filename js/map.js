function get_loc(){
	axios.post('https://www.googleapis.com/geolocation/v1/geolocate?',{
		key: 'AIzaSyA7EsmyKLBgtl13SRV5Qn56cowFm2jQhII'
	})
	.then(function(response){
		console.log(response);
	})
	.catch(function(error){
		console.log(error);
	})
}
get_loc();