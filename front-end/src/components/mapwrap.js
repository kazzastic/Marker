import React,{Component} from 'react';
import { GoogleMap,Marker,InfoWindow } from '@react-google-maps/api';
import {connect} from 'react-redux';
import {mapTypeChangeSync} from '../actions/map';
import donut from "../utils/icons/donut.png";


class GoogleMapWrapper extends Component{

    handleType = () => this.props.mapTypeChangeSync(this.map.getMapTypeId());
    

    render(){
        const {currentLocation,mappedMarkers,onClick,map} = this.props;
        
        if (currentLocation.lat && currentLocation.lng)
            return (
                <GoogleMap mapContainerStyle= {{height: "100vh",
                 width: "100vw" }} center = {currentLocation} zoom = {20}
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

    if (cachedMarker)
        mappedMarkers.push(cachedMarker);

    return {currentLocation,mappedMarkers,map};
}


export default connect(mapStateToProps,
            {mapTypeChangeSync})(GoogleMapWrapper);