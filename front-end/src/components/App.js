import React,{Component,Fragment} from 'react';
import ScriptLoaded from './ScriptLoaded'
import { connect } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
//import Navigation from './navigation';
import Home from './home';
import Manage from './manage';
import Add from './add';
import About from './about';
import NavBar from './navBar'
import Footer from './footer'
import {getCurrLocASync} from '../actions/location';



class App extends Component{

    componentDidMount() {
        this.locationID = setInterval(() => 
            this.props.getCurrLocASync(),
            1000);
    }


    componentWillUnmount() {
        clearInterval(this.locationID);
    }


    render(){

        const {loading} = this.props;

        return(
            <ScriptLoaded>
                
                <BrowserRouter>
                    <Fragment>

                       {/* <LoadingBar />*/}

                        <div>
                            {/*<Navigation />*/}
                            <NavBar />

                            {loading? null: (
                                <div>
                                    <Route exact path = '/' component = {Home} />
                                    <Route path = '/manage' component = {Manage} />
                                    <Route path = '/add' component = {Add} />
                                    <Route path = '/about' component = {About} />
                                </div>   
                            )}

                            <Footer />
                        </div>
                    </Fragment>
                </BrowserRouter>

            </ScriptLoaded>
        );
    }
}


const mapStateToProps = ({currentLocation}) => {
    const {lat,lng} = currentLocation;
    const loading = lat&&lng?false:true;
    return {loading};
}


export default connect(mapStateToProps,{getCurrLocASync})(App);
