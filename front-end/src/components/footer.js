import {Footer} from 'react-materialize'
import React, {Component} from 'react'

class sticky extends Component{
  render(){
    return(

      <Footer
            copyrights="&copy 2019 Copyright by Marker Team"
            moreLinks={<a />}
            links={<ul />}
            className=" blue darken-4"
            background-color= "red"
          >
            <h5 className="white-text">
            Marker Web App
            </h5>
            <p className="grey-text text-lighten-4">
            Never Loose Sight Of your Shit
            </p>
      </Footer>
    )
  }
}

export default sticky;