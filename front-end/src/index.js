import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import middleware from './middlewares';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {loadState,saveState} from './utils/helpers';
import throttle from 'lodash.throttle';



const preloadedState = loadState();
const store = createStore(rootReducer,preloadedState,middleware);

store.subscribe(throttle(()=> saveState(store.getState())),2000);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


