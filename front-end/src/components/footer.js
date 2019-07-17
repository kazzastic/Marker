import React from 'react';
import {Footer} from 'react-materialize'
import img from '../utils/icons/saad.jpg'

function MyFooter() {
    return(
        <Footer
            copyrights="&copy 2019 Copyright by Marker Team"
            moreLinks={<a />}
            links={<ul>
                <li style = {{color:"black"}}><a href = 'https://github.com/kazzastic/Marker'>Github</a></li>
                <li><a href = 'https://stackoverflow.com/questions/57017686/reactjs-web-app-google-maps-working-on-pc-localhost-but-not-on-mobile'>StackOverflow</a></li>
                <li><a href = 'https://www.facebook.com/pages/category/Software-Company/BabuSoft-293325034668910/'>Facebook</a></li>
            </ul>}
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
    );
}


export default MyFooter;