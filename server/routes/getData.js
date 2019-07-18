var express = require('express');
var router = express.Router();
var secrets = require('../secrets/key');
const polyline = require('@mapbox/polyline');

const googleMapsClient = require('@google/maps').createClient({
    key: secrets,
    Promise:Promise
});


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
