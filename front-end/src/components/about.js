import React,{Fragment} from 'react';
import {Row, Col,Carousel, CardPanel, Parallax,
 Card, CardTitle} from 'react-materialize';
import img1 from '../utils/icons/shameer.jfif';
import img2 from '../utils/icons/kazim.jfif';
import img3 from '../utils/icons/saad.jpg'

function About(props) {
    return (
        <Fragment>
                <Carousel options={{fullWidth: true,indicators: true,
                 duration:200, shift:0,dist:-100 }} className="white-text center">

                    <div className="blue">
                        <h2>Team</h2>
                        <p>
                            This Web App was made possible by the hard work
                            put in by these down to earth young people
                        </p>
                    </div>


                    <div className="blue">
                        <h2>Syed Shameer Sarwar</h2>
                        <h5>CT-044</h5>
                        <p>
                            Out beyond ideas of wrongdoing and rightdoing 
                            there is a field. I'll meet you there. When the
                            soul lies down in that grass the world is too 
                            full to talk about
                        </p>
                        <p>~Rumi</p>
                    </div>


                    <div className="blue">
                        <h2>Saad Muhammad Syed</h2>
                        <h5>CT-057</h5>
                        <p>
                           Very little grows on jagged rock. Be ground. 
                           Be crumbled, so wildflowers will come up 
                           where you are.
                        </p>
                        <p>~Rumi</p>
                    </div>


                    <div className="blue">
                        <h2>Kazim Raza</h2>
                        <h5>CT-054</h5>
                        <p>
                            I came to know Allah, the Glorified, through 
                            the breaking of determinations, change of 
                            intentions and losing of courage.
                        </p>
                        <p>~Amir al-mu'minin</p>
                    </div>

                </Carousel>


                <div>
                    <div className="section white">
                        <div className="row container">

                            <h2 className="header" 
                             style={{textAlign:"center"}}>
                                Who are we?
                            </h2>

                            <p style={{textAlign:"center"}}>
                                A bunch of aspiring web developers trying 
                                to make something of thier lives!
                            </p>

                            <h2 style={{textAlign:"center"}}>-Our Team-</h2>

                            <Row>
                                <Col m={4} s={12}>

                                    <Card header = {<img src= {img1} alt = 
                                     'Shameer' height = '240px' width ='290px'
                                     />}
                                     reveal = {<p><a href = 
                                     "https://github.com/syedshameersarwar">
                                         Check my github
                                      </a></p>
                                     }
                                     title = 'Shameer'>
                                       Junior Web Developer
                                    </Card>

                                </Col>

                                <Col m={4} s={12}>

                                    <Card header={<img src= {img3} alt = 
                                     'Saad' height = '240px' width ='290px'/>}
                                     reveal = {<p><a href = 
                                     "https://github.com/saadmuhammadsyed">
                                         Check my github
                                      </a></p>
                                     }
                                     title = 'Saad'>
                                       Senior Backend Developer
                                    </Card>

                                </Col>

                                <Col m={4} s={12}>

                                    <Card header={<img src= {img2} alt = 
                                     'Kazim' height = '240px' width ='290px'/>}
                                     reveal = {<p><a href = 
                                     "https://github.com/kazastic">
                                         Check my github
                                      </a></p>
                                     }
                                     title = 'Kazim'>
                                       Highly Skilled Data Scientist
                                    </Card>

                                </Col>
                            </Row>
                        </div>
                    </div>

                    <Parallax image={
                    <img src={
                    'https://www.telegeography.com/page_attachments/products/'
                     +'website/telecom-maps/0008/3882/sub-cable-map-2015.png'}
                      />} />

                    <div className="section white">
                        <div className="row container">

                            <h3 className='header' style={{textAlign:"center"}
                             }>
                                -Our Mission-
                            </h3>
                            
                            <p className="grey-text text-darken-3 lighten-3">
                                Parallax is an effect where the background
                                content or image in this case, is moved at a 
                                different speed than the foreground content
                                while scrolling.
                            </p>

                        </div>
                    </div>

                    <Parallax image = {<img 
                     src = { 
                     'https://www.telegeography.com/page_attachments/'+
                      'products/website/telecom-maps/0008/3882/sub-cable-map'
                      +'-2015.png'}/>}/>

                </div>
            </Fragment>
    );
}


export default About;