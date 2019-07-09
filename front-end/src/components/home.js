import React,{Component,Fragment} from 'react';
//import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//import { GoogleMap,Marker,InfoWindow } from '@react-google-maps/api';
import GoogleMapWrapper from './mapwrap';
import {Button as Btn} from 'react-materialize'



class Home extends Component{


    render(){

        //const {currentLocation,mappedMarkers} = this.props;
        
        return (
            <Fragment>
                <div>
                    <GoogleMapWrapper />
                    {/*}
                    <GoogleMap mapContainerStyle={{height: "680px",
                    width: "480px" }} center = {currentLocation}
                    zoom = {20}>
                        <Marker position = {currentLocation} 
                        icon = '../utils/images/donut.png'/>

                        <InfoWindow position = {currentLocation}>
                            <p>Location Found</p>
                        </InfoWindow>

                        {mappedMarkers.map(marker => (
                            <li key = {marker.id}>
                                <Marker position = {marker.location}
                                label = {marker.id} />
                            </li>
                        ))}
                    </GoogleMap>
                        {*/}
                </div>
                <div>

                    <Btn
                      floating
                      fab={{direction: 'left',hoverEnabled: false}}
                      icon="edit"
                      className=" blue darken-4"
                      large
                    >
                    <Link to = '/add'>
                        <Btn floating icon="location_on" className="yellow darken-1"/>
                    </Link>
                    <Btn floating icon="publish" className="green" />
                    <Btn floating icon="attach_file" className="blue" />
                    </Btn>
                </div>
            </Fragment>
        );
    }
}

/*
const mapStateToProps = ({currentLocation,objects}) => {
    const mappedMarkers = objects.map(obj =>({
        id:obj.id,
        location:obj.location
    }));
    return {currentLocation,mappedMarkers};
}
*/

//export default connect(mapStateToProps)(Home);

export default Home;
