import React from 'react';
import {LoadScript} from '@react-google-maps/api';
import API_KEY from '../secrets/key';

function ScriptLoaded(props) {
    return(
        <LoadScript googleMapsApiKey={API_KEY} 
         loadingElement = {<p></p>}>
             {props.children}
        </LoadScript>
    );
}

export default ScriptLoaded;