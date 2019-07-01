import React,{Component} from 'react';
import {render} from 'react-dom';
import API_KEY from '../secrets/key';
class Map extends Component{
    
    onScriptLoad = () => {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        this.props.onMapLoad(map);
        
    }

    componentDidMount = () => {
        console.log(API_KEY);
        if(!window.google){
            
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=${API_KEY}`;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            s.addEventListener('load', e => this.onScriptLoad())
        } 
        else
            this.onScriptLoad()
    }

    render() {
        
        return (
          <div style={{ width: this.props.width, height:this.props.height}} 
           id={this.props.id} />
        );
    }
    
}

export default Map;