import React, {Component, Fragment} from 'react'
import {Row, Col,Carousel, CardPanel, Parallax} from 'react-materialize'

class about extends Component{
    render(){
        return(
            <Fragment>
                <Carousel options={{fullWidth: true,indicators: false, duration:100, shift:10, }} className="white-text center">
                    <div className="blue">
                        <h2>Team</h2>
                        <p>This Web App was made possible by the hard work put in by these down to earth young people</p>
                    </div>
                    <div className="blue">
                        <h2>Syed Shameer Server</h2>
                        <h5>CT-044</h5>
                        <p>Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there. When the soul lies down in that grass the world is too full to talk about</p>
                        <p>~Rumi</p>
                        
                    </div>
                    <div className="blue">
                        <h2>Saad Muhammad Syed</h2>
                        <h5>CT-057</h5>
                        <p>Very little grows on jagged rock. Be ground. Be crumbled, so wildflowers will come up where you are.</p>
                        <p>~Rumi</p>
                    </div>
                    <div className="blue">
                        <h2>Kazim.</h2>
                        <h5>CT-054</h5>
                        <p>I came to know Allah, the Glorified, through the breaking of determinations, change of intentions and losing of courage.</p>
                        <p>~Amir al-mu'minin</p>
                    </div>
                </Carousel>
                <div>
                    <div className="section white">
                        <div className="row container">
                            <h2 className="header" style={{textAlign:"center"}}>
                                Who are we?
                            </h2>
                            <p className="grey-text text-darken-3 lighten-3">
                                Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
                            </p>
                        </div>
                    </div>
                    <Parallax image={<img src='https://www.telegeography.com/page_attachments/products/website/telecom-maps/0008/3882/sub-cable-map-2015.png' />} />
                    <div className="section white">
                        <div className="row container">
                            <h2 className="header">
                                Parallax
                            </h2>
                            <p className="grey-text text-darken-3 lighten-3">
                                Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
                            </p>
                        </div>
                    </div>
                    <Parallax image = {<img src = 'https://www.telegeography.com/page_attachments/products/website/telecom-maps/0008/3882/sub-cable-map-2015.png'/>}/>
                </div>
            </Fragment>
        )
    }
}

export default about;