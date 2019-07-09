import React,{Component} from 'react';
//import { GoogleMap,Marker} from '@react-google-maps/api';
import GoogleMapWrapper from './mapwrap';
import {addObjectASync} from '../actions/objects';
import DirectionServiceWrapper from './directionWrapper';
import {connect} from 'react-redux';
import {Modal, Button, Icon} from 'react-materialize'
import Step from './stepp'



class Add extends Component{

    constructor(props){
        super(props);
        this.state = {
            cachedMarker:null,
            objectMarked:false,
            isObjExist:false,
            input:'',
            clickable:true,
            fetchDirection:false
        }
    }


    onClick = (e) => {
        //console.log(e);
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        const location = {lat,lng};

        this.setState({
            cachedMarker:{
                location
            },
            objectMarked:true,
            clickable:false
        });
    }


    onChange = (e) => {
        const value = e.target.value;
        const {objectIds} = this.props;

        this.setState({
            input:value
        });

        if(objectIds.includes(value))
            this.setState({
                isObjExist:true
            });
        else{
            this.setState({
                isObjExist:false
            });
        }
    }


    onAdd = (e) => {
        e.preventDefault();
        const {location} = this.state.cachedMarker;
        const id = this.state.input;

        this.props.addObjectASync({
            id,location
        });

        this.setState({
            clickable:true,
            input:'',
            cachedMarker:null,
            objectMarked:false,
            isObjExist:false,
            fetchDirection:true
        });

        setTimeout(()=>this.props.history.push('/'),1000);
    }


    onCancel = () => {
        const move = window.confirm(
                        'By Clicking OK,the data on this page will be lost.');
        
        if(move === true){
            this.setState({
                clickable:true,
                input:'',
                cachedMarker:null,
                objectMarked:false,
                isObjExist:false,
            });

            this.props.history.push('/');
        }
    }
    

    render(){
        const {cachedMarker,objectMarked,clickable,input,
         isObjExist,fetchDirection} = this.state;
        
        return(
            <div>
                <Step/>
                <div>
                    <GoogleMapWrapper onClick = 
                     {clickable?this.onClick:undefined} cachedMarker =
                     {cachedMarker} />
                </div>
                {/*apply react transition here */}
                {objectMarked && (  
                    <Modal header = "what's the name of your object bro?" open>
                        <form onSubmit = {this.onAdd}>

                            <input value = {input} onChange = {this.onChange}
                            placeholder = {'Object Name e.g Bag'} type = 'text' />

                            <Button disabled = {input==='' || 
                            isObjExist === true} type = 'submit' style={{marginRight: '5px', backgroundColor:'blue'}}>
                                Add Object
                                <Icon left>
                                    add
                                </Icon>
                            </Button>
                            
                            <Button type="button" onClick = {this.onCancel} style={{backgroundColor:'blue'}}>
                                Cancel
                                <Icon right>
                                    delete_sweep
                                </Icon>
                            </Button>

                            {isObjExist && (
                                <label>
                                    Object with this name already exists.
                                </label>
                            )}

                        </form>
                    </Modal>
                )}

                {fetchDirection && (<DirectionServiceWrapper />)}
            </div>
        );
    }
}


const mapStateToProps = ({objects}) => {
    const objectIds = objects.map(obj => obj.id);
    return {objectIds};
}


export default connect(mapStateToProps,{addObjectASync})(Add);