import {ADD_OBJECT,DELETE_OBJECT,GET_DIRECTION_RESPONSE} from '../types/objects';
import {UPDATE_OBJECTS_DISTANCES} from '../types/shared';


const objects = (state = [],action) => {

    switch(action.type){
        case ADD_OBJECT:
            return [...state,action.object];

        case DELETE_OBJECT:
            return state.filter(obj => obj.id !== action.id);

        case GET_DIRECTION_RESPONSE:
            return state.map(obj => {
                if(obj.id === action.id)
                    return {...obj,directionResponse:action.directionResponse};
                
                return obj;
            });
        
        case UPDATE_OBJECTS_DISTANCES:
            return action.objects;

        default:
            return state;
    }
}


export default objects;