import React,{Component,Fragment} from 'react';
import {GoogleMap,Marker,DirectionsRenderer} from
 '@react-google-maps/api';
import {connect} from 'react-redux';
import {deleteObjectSync} from '../actions/objects';
import {mapTypeChangeSync} from '../actions/map';
import {changeModeASync} from '../actions/mode';
import DirectionServiceWrapper from './directionWrapper';
import {Select, Button,ProgressBar,Modal,RadioGroup}
 from 'react-materialize';
import {areStatesEqual} from '../utils/helpers';
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
            none:true
        })
    }


    filterResponse = () => {
        const {objects} = this.props;
        const {currentObjId,none} = this.state;
        
        if (none && !currentObjId)
            return false;
        
        const [extractedObj] = objects.filter(o => o.id === currentObjId);
        const {directionResponse,distanceResponse} = extractedObj;

        return {currentDirectionResponse:directionResponse,
            currentDistanceResponse:distanceResponse};
    }

    
    handleLoad = (map) => {
        this.map = map;

        const controlDiv = document.createElement('div');
        controlDiv.className = 'custDiv';
        controlDiv.title = 'Manage your objects';
        
        controlDiv.addEventListener('click',() => this.setState({
            modalOpen:true
        }));

        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
                                                                controlDiv);
    }


    handleChange = (e) => {
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
        });
    }


    onModalClose = () => this.setState({modalOpen:false});


    render(){

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
        
        return(
            <div>

                <DirectionServiceWrapper />

                {loading && objects.length > 0 && (<ProgressBar/>)}

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

                      
                      <br /><br />
                      <h6 style = {{textAlign:'center',color:'teal'}}>
                          Select Object:
                      </h6>
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


                </Modal>)}
                
                
                <GoogleMap mapContainerStyle = {{height: "100vh",
                 width: "100vw" }} center = {currentLocation} zoom = {20}
                 onLoad = {this.handleLoad} mapTypeId = {map} 
                 onMapTypeIdChanged = {this.handleType}> 

                    {(currentDirectionResponse !== undefined && !none)&&(
                    <Fragment> 

                        <DirectionsRenderer options = {{
                            directions:currentDirectionResponse,
                            suppressMarkers:true
                        }}/>


                        <Marker position = {{
                            lat:typeof(origin.lat) !== 'function'?
                                origin.lat:origin.lat(),
                            lng:typeof(origin.lng) !== 'function'?
                                origin.lng:origin.lng()}} icon= 
                         {{path:google.maps.SymbolPath.CIRCLE,scale:10}}
                         label = {{text:'You',color:'yellow',fontSize:'15px',
                         fontWeight:'bold'}}/>


                        <Marker position = {{
                            lat:typeof(dest.lat) !== 'function'?
                                dest.lat:dest.lat(),
                            lng:typeof(dest.lng) !== 'function'?
                                dest.lng:dest.lng()}} 
                         label = {{text:currentObjId,color:'black',fontSize:'15px',
                         fontWeight:'bold'}}/>

                    </Fragment>
                    )
                    }   
                    
                </GoogleMap>
                

                
                {!none && (
                 <div key = 'details' style = {{textAlign:'center'}}>
                    <h4>Distance : {distance?distance.text:''}</h4>
                    <h4>Time: {duration?duration.text:''}</h4>

                    <br />
                    <Button onClick = {this.handleDelete}>
                        Delete Object
                    </Button>
                </div>
                )}
                
            </div>
            
        );
    }
}


const mapStateToProps = ({currentLocation,objects,mode,map,loading}) => (
    {objects,currentLocation,mode,map,loading}
);


const options = {
    areStatesEqual:areStatesEqual
};


export default connect(mapStateToProps,
    {changeModeASync,deleteObjectSync,mapTypeChangeSync},
    null,options)(Manage);
