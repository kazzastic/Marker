export const getObjectResponse = (obj) => {
    return fetch('http://localhost:3001/getObjData',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(obj)
    }).then(responseObj => responseObj.json());
}

