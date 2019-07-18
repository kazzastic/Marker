import {MAP_TYPE_CHANGED} from '../types/map';


const map = (state = 'roadmap',action) => {
    switch(action.type){

        case MAP_TYPE_CHANGED:
            return action.mapType;
        
        default:
            return state;
        
    }
}


export default map;