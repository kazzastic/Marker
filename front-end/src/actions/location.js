import {GET_CURRENT_LOCATION} from '../types/location';
import {updateObjectsDistanceASync} from './shared';


const getCurrLocSync = (currentLocation) => ({
    type:GET_CURRENT_LOCATION,
    currentLocation
});


export const getCurrLocASync = () => (dispatch,getState) => {
       const oldLocation = getState().currentLocation;

       navigator.geolocation.getCurrentPosition(({coords}) => {
            console.log('Fetched Location Object: ',
            {l:coords.latitude,lng:coords.longitude});

            if(coords.latitude !== oldLocation.lat || 
                coords.longitude !== oldLocation.lng){
                const location = {lat:coords.latitude,
                                  lng:coords.longitude};
                dispatch(getCurrLocSync(location));
                dispatch(updateObjectsDistanceASync());
            }
       },err => console.log(err),{enableHighAccuracy:true});

}
