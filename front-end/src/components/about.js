import React,{Fragment} from 'react';
import {Row, Col,Carousel, Parallax,
 Card, CardTitle} from 'react-materialize';
import img1 from '../utils/icons/shameer.jfif';
import img2 from '../utils/icons/kazim.jfif';
import img3 from '../utils/icons/saad.jpg'
import saad from '../utils/icons/saad_me.jpg'
import team1 from '../utils/icons/team.jpg'
import team2 from '../utils/icons/team2.jpg'
import parr from '../utils/icons/saad_me_a.jpg'

function About(props) {
    return (
        <Fragment>
            <Carousel options= {{fullWidth : true, indicators: true}}
            images = {[ saad,
                        team1,
                        team2,]} centerImages = {true}/>

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
                    <img src={parr}
                      />} />

                    <div className="section white">
                        <div className="row container">

                            <h3 className='header' style={{textAlign:"center"}
                             }>
                                -Our Mission-
                            </h3>
                            
                            <p className="grey-text text-darken-3 lighten-3" style={{textAlign:"center"}}>
                            We exist to enable transformation for industry-leading brands.<br/>

With every team member staying keenly focused on our mission, we've become a preferred technology and business advisor for some of the worlds leading organizations. We deliver solutions that take our clients to exceptional new heights of performance, and thereby, fulfill our brand promise of Building Success Together®.<br/>

We take great pride in our people, and how they are continually striving for a higher level of excellence by being committed to our mission and core values. Our people, and the shared values they embody, are the foundations of our organization and the reasons for our success. Our values define us as a global organization, bring us together as a Nisum family, and guide us in how we work with each other and with clients.
                            </p>

                        </div>
                    </div>

                    <Parallax image = {<img 
                     src = {parr}/>}/>

                </div>
            </Fragment>
    );
}


export default About;