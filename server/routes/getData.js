var express = require('express');
var router = express.Router();
var secrets = require('../secrets/key');
const polyline = require('@mapbox/polyline');

const googleMapsClient = require('@google/maps').createClient({
    key: secrets,
    Promise:Promise
});


const getDirections = (directionObj) => {
    return googleMapsClient.directions(directionObj)
               .asPromise();
}


const getDistance = (directionObj) => {
    return googleMapsClient.distanceMatrix(directionObj)
               .asPromise();              
}


const getObjectData = (directionObj) => {

    const distanceDirectionObj = {
        origins:directionObj.origin,
        destinations:directionObj.destination,
        mode: directionObj.mode
    };
    //console.log(distanceDirectionObj);
    /*
    return Promise.all([getDirections(directionObj),
                        getDistance(distanceDirectionObj)])
               .then(responseCluster => 
                    [responseCluster[0].json,responseCluster[1].json])
               .then(responeData => {
                   
                   const directionResponse = responeData[0];
                   const distanceResponse = responeData[1];
                   
                
                   if (directionResponse.status === 'OK' &&
                        distanceResponse.status === 'OK'){
                        //console.log(directionResponse);
			/*							
			directionResponse.routes.forEach(route => { route.bounds = 
			{ south: route.bounds.southwest.lat, west: route.bounds.southwest.lng, 
			north: route.bounds.northeast.lat, east: route.bounds.northeast.lng }; 
                        const polylines = route.overview_polyline.points;
                        route.overview_path = polyline.decode(polylines);
			route.legs.forEach(leg =>{ leg.steps.forEach(step=>
			{ step.path=require('@google/maps').util.decodePath(step.polyline.points); }); }); });
                        directionObj.travelMode = directionObj.mode;
			directionResponse.request = directionObj;
                        */
			/*
			directionResponse.routes.forEach(route => {
			route.overview_path = require('@google/maps').util.decodePath(route.overview_polyline.points);
			route.legs.forEach(leg => {
			    leg.steps.forEach(step => {
			        step.path = require('@google/maps').util.decodePath(step.polyline.points);
			    });	
			});
			});
                        console.log(directionResponse.routes[0].legs);
			directionObj.travelMode = directionObj.mode;
                        directionResponse.request = directionObj;
			
                        return {directionResponse,
                                distanceResponse:
                                   distanceResponse.rows[0].elements[0]};
                    }
               })
               .catch(e => e);*/
	return getDistance(distanceDirectionObj)
	           .then(distanceResponse => distanceResponse.json)
		   .then(extractedResponse => {
			console.log(extractedResponse.rows[0].elements[0]);
			if(extractedResponse.status === 'OK')
			  return {distanceResponse:
					extractedResponse.rows[0].elements[0]}
				
		    });
}

/* GET Object direction and distance response. */
router.post('/', function(req, res, next) {
  const directionObj = req.body;
  
  getObjectData(directionObj)
      .then(responseObj => res.json(responseObj))
      .catch(e => console.log('Timeout ',e));
});

module.exports = router;
