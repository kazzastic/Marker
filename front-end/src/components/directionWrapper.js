import React,{Component} from 'react';
import {DirectionsService} from '@react-google-maps/api';
import {getDirectionResponseSync} from '../actions/objects';
import {connect} from 'react-redux';


class DirectionServiceWrapper extends Component {

    handleDirection = (objID,response) => {
        console.log('Res:',response);
        if(response !== null)
            if(response.status === 'OK')
                setTimeout(()=>this.props.getDirectionResponseSync(objID,response),300);
    }
    
    render(){
        const {currentLocation,mode,objects} = this.props;
        const elt = (objects.map(obj => (<li key = {obj.id}>
                <DirectionsService options = {{
                    origin:currentLocation,
                    destination:obj.location,
                    travelMode:mode.toUpperCase()
                    }} callback = {(response) => 
                        this.handleDirection(obj.id,response)}
                /></li>
            )));

        console.log('rendering direction:',elt,currentLocation,mode,objects);

        return(
            <ul style = {{listStyleType:'none'}}>
                {elt}
            </ul>
        );

    }
}


const mapStateToProps = ({currentLocation,objects,mode}) => (
    {currentLocation,objects,mode}
);

export default connect(mapStateToProps,
    {getDirectionResponseSync})(DirectionServiceWrapper);