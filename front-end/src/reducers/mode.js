import { CHANGE_MODE } from "../types/mode";

const mode = (state = 'driving',action) => {
    
    switch(action.type){
        
        case CHANGE_MODE:
            return action.mode;
        
        default:
            return state;
    }
}

export default mode;