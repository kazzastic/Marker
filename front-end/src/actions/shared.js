import {UPDATE_OBJECTS_DISTANCES} from '../types/shared';
import {getObjectResponse} from '../utils/ClientApi';



const updateObjectsDistanceSync = (updatedObjects) => ({
    type:UPDATE_OBJECTS_DISTANCES,
    objects:updatedObjects
});


export const updateObjectsDistanceASync = () => (dispatch,getState) => {


    const {currentLocation,mode,objects} = getState();
    const objectsCopy = objects.map( obj => ({...obj})); //deep copy of array of objects
    const modifiedObjects = [];

    for(let object of objectsCopy){ 
        
        const newObj = {
            origin:currentLocation,
            destination:object.location,
            mode
        };

        getObjectResponse(newObj)
            .then(responseObj => {
                const {distanceResponse} = responseObj;
                
                if(distanceResponse.status === 'ZERO_RESULTS')
                    modifiedObjects.push({...object});
                else
                    modifiedObjects.push(
                            {...object,
                            distanceResponse:responseObj.distanceResponse
                            }
                        );

                if(modifiedObjects.length === objects.length){
                    dispatch(updateObjectsDistanceSync(modifiedObjects));
                    
                }
            })
            .catch(e => console.log('Failed to update responses.',e));
    }
} 