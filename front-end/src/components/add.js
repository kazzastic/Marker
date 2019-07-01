import React,{Component} from 'react';
//import { GoogleMap,Marker} from '@react-google-maps/api';
import GoogleMapWrapper from './mapwrap';
import {addObjectASync} from '../actions/objects';
import DirectionServiceWrapper from './directionWrapper';
import {connect} from 'react-redux';


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
                <p>
                    Mark the Object!
                </p>

                <div>
                    <GoogleMapWrapper onClick = 
                     {clickable?this.onClick:undefined} cachedMarker =
                     {cachedMarker} />
                </div>
                {/*apply react transition here */}
                {objectMarked && ( 
                    <form onSubmit = {this.onAdd}>

                        <input value = {input} onChange = {this.onChange}
                         placeholder = {'Object Name e.g Bag'} type = 'text' />

                         <button disabled = {input==='' || 
                          isObjExist === true} type = 'submit'>
                            Add Object
                         </button>
                         
                         <button type="button" onClick = {this.onCancel}>
                             Cancel
                         </button>

                         {isObjExist && (
                            <label>
                                Object with this name already exists.
                            </label>
                         )}

                    </form>
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