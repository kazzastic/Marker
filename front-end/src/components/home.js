import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import GoogleMapWrapper from './mapwrap';
import {Button,ProgressBar} from 'react-materialize';


class Home extends Component{
    render(){

        const {loading} = this.props;

        if (loading)
            return (<ProgressBar/>);
        
        return (
            <Fragment>
                <div>
                    <GoogleMapWrapper />
                </div>


                <div>
                    <Button floating fab=
                     {{direction: 'left',hoverEnabled: false}} icon="edit"
                      className=" blue darken-4" large>

                        <Link to = '/add'>
                            <Button 
                             floating icon="location_on" 
                             className="yellow darken-1"/>
                        </Link>

                    </Button>
                </div>

            </Fragment>
        );
    }
}


const mapStateToProps = ({loading}) => ({loading});


export default connect(mapStateToProps)(Home);