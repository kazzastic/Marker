import {ADD_OBJECT,DELETE_OBJECT,GET_DIRECTION_RESPONSE} from '../types/objects';
import {getObjectResponse} from '../utils/ClientApi';
//import {showLoading,hideLoading} from 'react-redux-loading';
import {showLoading,hideLoading} from '../actions/loading';



const addObjectSync = (responseObj) => ({
    type:ADD_OBJECT,
    object:responseObj
});


export const deleteObjectSync = (objectID) => ({
    type:DELETE_OBJECT,
    id:objectID
});


export const getDirectionResponseSync = (objectID,response) => ({ 
    type:GET_DIRECTION_RESPONSE,
    id:objectID,
    directionResponse:response
});


export const addObjectASync = (newObject) => (dispatch,getState) => {
    dispatch(showLoading());
    const {currentLocation,mode} = getState();
    const {location,id} = newObject;
    const reqObj =  {origin:currentLocation,
                     destination:location,
                     mode};
    
    return getObjectResponse(reqObj)
               .then(responseObj => {
                   
                   const storeObj = {
                       id,location,
                       //directionResponse:{...responseObj.directionResponse},
                       distanceResponse:responseObj.distanceResponse
                    };
                    
                   //console.log('Reeeeees',responseObj);
                    
                   dispatch(addObjectSync(storeObj));
                   //console.log('dispatching hideloading.');
                   dispatch(hideLoading());
               });
}

