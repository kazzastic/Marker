//import {getObjectResponse} from './utils/ClientApi';
const getObjectResponse = require('./utils/ClientApi');

const requestObj = {
    origin:{lat:24.91434641996124,lng:67.13062763214111},
    destination:{lat:24.91434641996124,lng:67.12715148925781},
    mode:'driving'
};

const startTimeStamp = new Date().getTime();
const arr = [];
//faster
for(let i=1;i<=50;i++){
    getObjectResponse(requestObj)
        .then(responseObj => {
            arr.push(responseObj);
            if(arr.length === 50){
                const endTimeStamp =  (new Date()).getTime();
                const finalTime = endTimeStamp-startTimeStamp;
                console.log('time:',finalTime/1000);
                console.log(arr);
            }
        });
}
const startTimeStamp2 = new Date().getTime();
//slower
for(let i=1;i<=50;i++){
    arr.push(getObjectResponse(requestObj))
}
Promise.all(arr)
        .then(responseArr => {
            const endTimeStamp2 =  (new Date()).getTime();
            const finalTime = endTimeStamp2-startTimeStamp2;
            console.log('time:',finalTime/1000);
            console.log(responseArr);
        });
        