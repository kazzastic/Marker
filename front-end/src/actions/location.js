import {GET_CURRENT_LOCATION} from '../types/location';
import {updateObjectsDistanceASync} from './shared';
import {currentLocation} from '../utils/ClientApi';
import {showLoading,hideLoading} from 'react-redux-loading';


const getCurrLocSync = (currentLocation) => ({
    type:GET_CURRENT_LOCATION,
    currentLocation
});


export const getCurrLocASync = () => (dispatch,getState) => {

    //dispatch(showLoading());
    /*
    return currentLocation
            .then(location => {
                const oldLocation = getState().currentLocation;
                console.log(location);
                
                if (location.lat !== oldLocation.lat
                    && location.lng !== oldLocation.lat){ //conditional dispatching
                    //console.log('changing location.');
                    dispatch(getCurrLocSync(location));
                    dispatch(updateObjectsDistanceASync());
                }
                //dispatch(hideLoading());
            })
            .catch(e => console.log('Failed to get current location.',e));
        */
       const oldLocation = getState().currentLocation;

       navigator.geolocation.getCurrentPosition(({coords})=> {
           console.log({l:coords.latitude,lng:coords.longitude})
           if(coords.latitude !== oldLocation.lat || 
                coords.longitude !== oldLocation.lng){
                    const location = {lat:coords.latitude,lng:coords.longitude};
                    console.log(location);
                    dispatch(getCurrLocSync(location));
                    dispatch(updateObjectsDistanceASync());
                }
       },err => console.log(err),{enableHighAccuracy:true});

}
