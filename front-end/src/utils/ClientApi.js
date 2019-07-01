//const fetch = require('node-fetch'); //delete this after testing
//import * as google from '@react-google-maps/api';
/*global google*/
// export it for react
export const currentLocation = new Promise((resolve,reject) => {

    navigator.geolocation.getCurrentPosition(({coords}) => {
        console.log('fetching location');
        const location = {
            lat:coords.latitude,
            lng:coords.longitude
        };
        resolve(location);
    },err => reject(err),
    {enableHighAccuracy:true});

});
//console.log(google);
/*
console.log('Google:',google);
const service = new google.DirectionsService();
service.route(
    {
      origin: {lat:67.00112,lng:74.35874000000001},
      destination: {lat:24.860730000000004,lng:31.5773},
      travelMode: 'driving'
    },
    (result, status) => {
      if (status === 'OK') {
        console.log(result);
      }
      else{
          console.log('error');
      }
    });
console.log(service);

*/

//console.log('goooooogllleee:',window.google);
//export it for react
export const getObjectResponse = (obj) => {
    return fetch('http://localhost:3001/getObjData',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(obj)
    }).then(responseObj => responseObj.json());
}

//module.exports = getObjectResponse; //delete this after testing