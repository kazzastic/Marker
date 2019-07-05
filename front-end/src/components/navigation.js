import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';


function Navigation(props){
    return(
        <p>do not need this anymore, if we do then do something about it This component is in /component/navigation</p>
    );
}


const mapStateToProps = ({objects}) => ({
    objects:objects.length
});


export default connect(mapStateToProps)(Navigation);
