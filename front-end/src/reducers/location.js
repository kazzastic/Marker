import {GET_CURRENT_LOCATION} from '../types/location';

const currentLocation = (state = {},action) => {

    switch(action.type){

        case GET_CURRENT_LOCATION:
            return action.currentLocation;

        default:
            return state;
    }
}

export default currentLocation;