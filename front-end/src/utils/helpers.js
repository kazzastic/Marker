export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}; 


export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(err) {
        console.log('Failed to stringify state, may be'/
         'state is not serialized.',err);
    }
};


export const areStatesEqual = (next,prev) => {
    
    if(next.currentLocation.lat !== prev.currentLocation.lat ||
        prev.currentLocation.lng !== next.currentLocation.lng)
        return false;
    
    if(next.mode !== prev.mode)
        return false;
    
    if(next.map !== prev.map)
        return false; 

    const newObjects = next.objects;
    const preObjects = prev.objects;
    
    if(!newObjects){
        return true;
    }

    if(newObjects !== preObjects)
        return false;
 
    const newDistances = newObjects.map(obj => obj.distanceResponse);

    const preDistances = preObjects.map(obj => obj.distanceResponse);
    
    for(let newDistance of newDistances)
        for(let preDistance of preDistances)
            if(newDistance.duration && newDistance.distance)
                if(newDistance.duration.text !== preDistance.duration.text
                    || newDistance.distance.text !== preDistance.distance.text)
                    return false;  
    
    return true;
};


