import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import middleware from './middlewares';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
//import NavBar from './components/navBar'
//import Footer from './components/footer'


const store = createStore(rootReducer,middleware);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


