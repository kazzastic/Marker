import {combineReducers} from 'redux';
//import {loadingBarReducer} from 'react-redux-loading';
import currentLocation from './location';
import map from './map';
import mode from './mode';
import objects from './objects';
import loading from './loading'


export default combineReducers({
    currentLocation,mode,objects,map,loading
});