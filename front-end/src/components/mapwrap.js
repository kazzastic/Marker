import React,{Component} from 'react';
import { GoogleMap,Marker,InfoWindow } from '@react-google-maps/api';
import {connect} from 'react-redux';
import {mapTypeChangeSync} from '../actions/map';
import donut from "./icons/donut.png";


class GoogleMapWrapper extends Component{


    handleType = () => this.props.mapTypeChangeSync(this.map.getMapTypeId());
    /*
    onLoad = (map) => {
        const elt = document.createElement('p');
        elt.innerHTML = 'maps loadedddd...';
        document.body.appendChild(elt);
        this.map = map;
    }
    */

    render(){
        const {currentLocation,mappedMarkers,onClick,map} = this.props;
        //console.log(donut);
        //console.log('ff',new google.maps.LatLng(24.919988335566842,67.1343894711640));
        if (currentLocation.lat && currentLocation.lng)
            return (
                
                <GoogleMap mapContainerStyle= {{height: "680px",
                 width: "480px" }} center = {currentLocation} zoom = {20}
                 onClick = {onClick? (e) => onClick(e):undefined} 
                 mapTypeId = {map} onMapTypeIdChanged = {this.handleType}
                 onLoad = {map => this.map = map}>

                    <Marker position = {currentLocation} 
                     icon = {{url:donut}} />

                    <InfoWindow position = {currentLocation}>
                        <p>Location Found</p>
                    </InfoWindow>

                    {mappedMarkers.map((marker,i) => (
                        <Marker key = {marker.id?marker.id:i}
                         position = {marker.location}
                         label = {marker.id?marker.id:undefined} />
                    ))}

                </GoogleMap>
                );

            else
                return null;
            
    }
}

const mapStateToProps = ({currentLocation,objects,map},{cachedMarker}) => {

    const mappedMarkers = objects.map(obj =>({
        id:obj.id,
        location:obj.location
    }));

    console.log('cached Marker:',cachedMarker)

    if (cachedMarker)
        mappedMarkers.push(cachedMarker);

    return {currentLocation,mappedMarkers,map};
}



export default connect(mapStateToProps,
            {mapTypeChangeSync})(GoogleMapWrapper);