import React,{Component,Fragment} from 'react';
import {GoogleMap,Marker,InfoWindow,DirectionsRenderer} from
 '@react-google-maps/api';
//import {DirectionsRenderer} from "react-google-maps";
import {connect} from 'react-redux';
import {deleteObjectSync} from '../actions/objects';
import {mapTypeChangeSync} from '../actions/map';
import {changeModeASync} from '../actions/mode';
import DirectionServiceWrapper from './directionWrapper';
import {Select, Button,ProgressBar,Modal,RadioGroup}
 from 'react-materialize';
import setting from './icons/settings-512.png';
/*global google*/


class Manage extends Component{

    constructor(props){
        super(props);
        this.state = {
            currentObjId:null,
            currentDirectionResponse:undefined,
            currentDistanceResponse:undefined,
            none:true,
            modalOpen:false
        }
    }
    /*
    onLoad = (map) => {
        const elt = document.createElement('p');
        elt.innerHTML = 'maps loaded';
        document.body.appendChild(elt);
        this.map = map;
    }
    */
    handleType = () => this.props.mapTypeChangeSync(this.map.getMapTypeId());


    handleMode = (e) => {
        const selectedMode  = e.target.value;
        
        this.props.changeModeASync(selectedMode);

        setTimeout(()=>null,1000);
    }


    handleDelete = () => {
        const {currentObjId} = this.state;
        this.props.deleteObjectSync(currentObjId);
        this.setState({
            currentObjId:null,
            /*
            currentDirectionResponse:undefined,
            currentDistanceResponse:undefined,
            */
            none:true
        })
    }


    filterResponse = () => {
        const {objects} = this.props;
        const {currentObjId,none} = this.state;
        
        if (none && !currentObjId)
            return false;
        
        const [extractedObj] = objects.filter(o => o.id === currentObjId);
        console.log('filter:',extractedObj);
        const {directionResponse,distanceResponse} = extractedObj;
        return {currentDirectionResponse:directionResponse,
        currentDistanceResponse:distanceResponse};
        
    }

    /*
    onModeUpdate = () => {
        const {currentObjId,none} = this.state;
        const {objects} = this.props;

        if(none)
            return;

        const [extractedObj] = objects.filter(obj => obj.id === currentObjId);

        const {directionResponse,distanceResponse} = extractedObj;

        this.setState({
            currentDirectionResponse:directionResponse?
                                            directionResponse:undefined,
            currentDistanceResponse:distanceResponse?distanceResponse:undefined
        });
    }
    */

    
    handleLoad = (map) => {
        this.map = map;
        const controlDiv = document.createElement('div');
        controlDiv.className = 'custDiv';
        controlDiv.title = 'Manage your objects';
        //controlDiv.style.backgroundImage = `url(${setting})`;
        
        
        //controlDiv.appendChild(controlButton);
        controlDiv.addEventListener('click',() => this.setState({
            modalOpen:true
        }));
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);
    }

    handleChange = (e) => {
        //const {objects} = this.props;
        const selectedId = e.target.value;

        if(selectedId === 'none'){
            this.setState({
                none:true,
                currentObjId:null
            });
            return;
        }

        this.setState({
            currentObjId:selectedId,
            none:false
        })
        /*
        const [extractedObj] = objects.filter(obj => obj.id === selectedId);


        const {directionResponse,distanceResponse} = extractedObj;
        
        this.setState({
            currentObjId:selectedId?selectedId:null,
            currentDirectionResponse:directionResponse?
                                            directionResponse:undefined,
            currentDistanceResponse:distanceResponse?distanceResponse:undefined,
            none:false
        }); 
        */  
    }


    onModalClose = () => this.setState({modalOpen:false});


    render(){

        //const {currentDirectionResponse,
        //currentDistanceResponse,none} = this.state;
        const {none,currentObjId,modalOpen} = this.state;
        const getCurrentResponse = this.filterResponse();
        const {currentDistanceResponse,currentDirectionResponse} = 
                                getCurrentResponse?getCurrentResponse:{};
        const {distance,duration} = currentDistanceResponse?
                                currentDistanceResponse:{};
        const path = currentDirectionResponse?
                        currentDirectionResponse.routes[0].legs[0]:null;
        const origin = path?path.start_location:null;
        const dest = path?path.end_location:null;

        const {currentLocation,objects,mode,map,loading} = this.props;
        
        console.log('Direction : ',currentDirectionResponse);
        return(
            <div>

                <DirectionServiceWrapper />

                {loading && (<ProgressBar/>)}

                {modalOpen && 
                (<Modal header = "Handle Your Objects!" 
                  options = {{dismissible:true,onCloseStart:
                  this.onModalClose}} open>


                      <br />
                      <h6 style = {{textAlign:'center',color:'teal'}}>
                          Select Mode:
                      </h6>
                      <RadioGroup name="Mode" withGap
                       value = {mode} options ={[
                          {label:'DRIVING',value:'driving'},
                          {label:'BICYCLING',value:'bicycling'},
                          {label:'TRANSIT',value:'transit'},
                          {label:'WALKING',value:'walking'}
                       ]} onChange = {this.handleMode}/>


                </Modal>)}
                {/*
                <h3>Select Mode:</h3>
                <div  onChange = {this.handleMode}>
                    <div>
                        <input type = 'radio' value = 'driving' 
                        name = 'modeInput' defaultChecked = 
                        {mode === 'driving'} />
                        <label>DRIVING</label>
                     </div>

                    <input type = 'radio' value = 'bicycling'
                     name = 'modeInput' defaultChecked = {mode === 'bicycling'}/>
                    <label>BICYCLING</label>
                    

                    <input type = 'radio' value = 'transit' 
                     name = 'modeInput' defaultChecked = {mode === 'transit'} />
                    <label>TRANSIT</label>

                    <input type = 'radio' value = 'walking' 
                     name = 'modeInput' defaultChecked = {mode === 'walking'} />
                    <label>WALKING</label>
                         
                </div>
                */}
                
                <GoogleMap mapContainerStyle = {{height: "100vh",
                 width: "100vw" }} center = {currentLocation} zoom = {20}
                 onLoad = {this.handleLoad} mapTypeId = {map} 
                 onMapTypeIdChanged = {this.handleType}> 
                    {/*
                    <Marker position = {currentLocation} 
                     icon = '../utils/images/donut.png'/>

                    <InfoWindow position = {currentLocation}>
                        <p>Current Location</p>
                    </InfoWindow>
                    */}
                    {(currentDirectionResponse !== undefined && !none)&&(
                    <Fragment> 
                    {/*<DirectionsRenderer directions = {currentDirectionResponse} />)*/}

                        <DirectionsRenderer options = {{
                            directions:currentDirectionResponse,
                            suppressMarkers:true
                        }}/>

                        <Marker position = {{lat:origin.lat(),
                         lng:origin.lng()}} icon= 
                         {{path:google.maps.SymbolPath.CIRCLE,scale:10}}
                         label = {{text:'You',color:'yellow',fontSize:'15px',
                         fontWeight:'bold'}}/>

                        <Marker position = {{lat:dest.lat(),
                         lng:dest.lng()}} 
                         label = {{text:currentObjId,color:'black',fontSize:'15px',
                         fontWeight:'bold'}}/>

                    </Fragment>
                    )
                    }   
                
                    
                </GoogleMap>
                
                

                <h3>Select Object:</h3>
                <Select value = {currentObjId?currentObjId:'none'}
                 onChange = {this.handleChange}>
                    <option value = 'none'>None</option>
                    <option value = '' disabled></option>
                    {objects.map(obj => (
                        <option key = {obj.id} value = {obj.id}>
                            {obj.id}
                        </option>
                    ))}
                </Select>
                
                
                
                {!none && (
                 <div key = 'details'>
                    <p >Distance : {distance?distance.text:''}</p>
                    <p >Time: {duration?duration.text:''}</p>

                    <Button onClick = {this.handleDelete}>
                        Delete Object
                    </Button>
                </div>
                )}
                
            </div>
            
        );
    }
}


const mapStateToProps = ({currentLocation,objects,mode,map,loading}) => {
    /*
    //console.log('google.geoetry',google.maps.geometry.encoding);
    console.log(new google.maps.Map())
    console.log('objsss:',objects);
    objects.forEach(object=> object.directionResponse = convert(object.directionResponse));
    console.log('converted objects:',objects);
    */
    return {objects,currentLocation,mode,map,loading};

};

const areStatesEqual = (next,prev) => {
    
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
    console.log(preDistances,newDistances);
    for(let newDistance of newDistances)
        for(let preDistance of preDistances){
            if(newDistance.duration && newDistance.distance)
                if(newDistance.duration.text !== preDistance.duration.text
                    || newDistance.distance.text !== preDistance.distance.text)
                    return false;
        }   
    
    return true;
};


const options = {
    areStatesEqual:areStatesEqual
};

export default connect(mapStateToProps,
    {changeModeASync,deleteObjectSync,mapTypeChangeSync},
    null,options)(Manage);

/*
const  convert = (serverResponse) => {
        serverResponse.routes = serverResponse.routes.map((response) => {
          const bounds = new google.maps.LatLngBounds(
            response.bounds.southwest,
            response.bounds.northeast,
          );
          response.bounds = bounds;
          //response.overview_path = new google.maps.geometry.encoding.decodePath(response.overview_polyline.points);
    
          response.legs = response.legs.map((leg) => {
            leg.start_location =
              new google.maps.LatLng(leg.start_location.lat, leg.start_location.lng);
            leg.end_location =
              new google.maps.LatLng(leg.end_location.lat, leg.end_location.lng);
            leg.steps = leg.steps.map((step) => {
              //step.path = google.maps.geometry.encoding.decodePath(step.polyline.points);
              step.start_location = new google.maps.LatLng(
                step.start_location.lat,
                step.start_location.lng,
              );
              step.end_location = new google.maps.LatLng(
                step.end_location.lat,
                step.end_location.lng,
              );
              return step;
            });
            return leg;
          });
    
          return response;
        });
    
        return serverResponse;
      }
    */