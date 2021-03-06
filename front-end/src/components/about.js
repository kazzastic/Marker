 import React,{Fragment} from 'react';
import {Row, Col,Carousel, Parallax,
 Card} from 'react-materialize';
import img1 from '../utils/icons/shameer.jfif';
import img2 from '../utils/icons/kazim.jfif';
import img3 from '../utils/icons/saad.jpg';
import team2 from '../utils/icons/team2blur.jpg';


function About(props) {

    return (
        <Fragment>
           
            <div>

                <div className="section white">
                    <div className="row container">

                        <h2 className="header" 
                         style={{textAlign:"center"}}>
                            Who are we?
                        </h2>

                        <p style={{textAlign:"center",color:'teal'}}
                         className = 'flow-text'>
                            A bunch of aspiring web developers trying 
                            to make something of their lives!
                        </p>

                        <br/>
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

                <br/><br/>            
                <Parallax image={
                 <img src={team2} alt = 'p1'
                  />} className = 'parallas-container'>
                    
                    <Carousel options={{fullWidth: true,
                     indicators: true}} className="white-text center">

                        <div>
                            <h2>
                                Team
                            </h2>
                            <h6 className = 'flow-text'>
                                This Web App was made possible 
                                by the hard work put in by these
                                down to earth young people
                            </h6>
                        </div>

                        <div >
                            <h2>
                                Syed Shameer Sarwar
                            </h2>
                            <h5>CT-044</h5>
                            <h6 className = 'flow-text'>
                                Out beyond ideas of wrongdoing and 
                                rightdoing 	there is a field.
                                <br/> 
                                I'll meet you there. When the	
                                soul lies down in that grass the 
                                world is too full to talk about
                            </h6>
                            <p>~Maulana Rumi</p>
                        </div>

                        <div>
                            <h2>
                                Saad Muhammad Syed
                            </h2>
                            <h5>CT-057</h5>
                            <h6 className = 'flow-text'>
                                Very little grows on jagged rock.
                                Be ground. 	Be crumbled, so 
                                wildflowers will come up 	
                                where you are.
                            </h6>
                            <p>~Rumi</p>
                        </div>

                        <div>
                            <h2>
                                Kazim Raza
                            </h2>
                            <h5>CT-054</h5>
                            <h6 class = 'flow-text'>
                                I came to know Allah, the Glorified, 
                                through the breaking of determinations,
                                <br />
                                change of intentions and losing of 
                                courage
                            </h6>
                            <p>~Amir al-mu'minin</p>
                        </div>

                    </Carousel>

                </Parallax>

                <br /><br />
                <div className="section white">
                    <div className="row container">

                        <h3 className='header' style={{textAlign:"center"}
                         }>
                            -Our Mission-
                        </h3>
                            
                        <p className= 'flow-text'
                         style={{textAlign:"center"}}>

                            We exist to enable transformation for 
                            industry-leading brands.
                            <br/>

                            With every team member staying keenly focused
                            on our mission, we've become a preferred 
                            technology and business advisor for some of 
                            the worlds leading organizations. We deliver
                            solutions that take our clients to 
                            exceptional new heights of performance, and
                            thereby, fulfill our brand promise of Building
                            Success Together®.
                            <br/>
                                
                            We take great pride in our people, and 
                            how they are continually striving for a 
                            higher level of excellence by being 
                            committed to our mission and core values. 
                            Our people, and the shared values they embody,
                            are the foundations of our organization and the
                            reasons for our success. Our values define us as
                            a global organization, bring us together as a 
                            Nisum family, and guide us in how we work with 
                            each other and with clients.
                            
                        </p> 
                            
                    </div>
                </div>

            </div>

        </Fragment>
    );
}
export default About;

