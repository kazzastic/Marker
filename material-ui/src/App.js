import React from 'react';
import {Component} from 'react'
import SimpleMap from './components/Map';
import MiniDrawer from './components/SideNav'
import StickyFooter from './components/Footer'

class App extends Component{
  render(){
    return(
      <div>
        <MiniDrawer/>
        <SimpleMap/>
        <StickyFooter/>
      </div>
    )
  }
}

export default App;