import React from 'react';
import Card from 'react-bootstrap/Card'
import Footer from "../../Footer";
import "./aboutUs.css"

import eldho_pic from '../../../images/eldho_pic.JPG'

function aboutUs() {
    return (
        <>
        <div className='main'>
            <div className = 'about'>
                <h1 className='title'>ABOUT US</h1>
                <p1 className='content'>
                    Instaleague organises football tournaments in turfs all over kochi.
                    We have recognised the love Kochi has for the beautiful game and we want
                    to share the true spirit of football by conducting tournments and leagues.
                </p1>
            </div>
            
            {/* <div className ='user'>
                 <h1 className ='title' >USER SPEAKS</h1>
             </div> */}

            <div className='team'>
                <h1 className ='title'> MEET THE TEAM</h1>
                <div className='row' >
                    <div class='circular-card'>
                        <Card.Img 
                        src = {eldho_pic} 
                        width="150"
                        class="rounded-circle z-depth-5" alt="100x100" 
                        data-holder-rendered="true"/>
                        <Card.Body>
                            <Card.Title align="center">
                                Thomas George
                            </Card.Title>
                            <Card.Subtitle align="center">
                                Co-Founder
                            </Card.Subtitle>
                        </Card.Body>
                    </div>
                    <div class='circular-card'>
                        <Card.Img 
                        src = {eldho_pic} 
                        width="150"
                        class="rounded-circle z-depth-2 img-responsive" alt="100x100" 
                        data-holder-rendered="true"/>
                        <Card.Body>
                            <Card.Title align="center">
                                Samuel Varghese
                            </Card.Title>
                            <Card.Subtitle align="center">
                                Co-Founder
                            </Card.Subtitle>
                        </Card.Body>
                    </div>
                    <div class='circular-card'>
                        <Card.Img 
                        src = {eldho_pic} 
                        width="150"
                        class="rounded-circle z-depth-2 img-responsive" alt="100x100" 
                        data-holder-rendered="true"/>
                        <Card.Body>
                            <Card.Title align="center">
                                Aditya Arun
                            </Card.Title>
                            <Card.Subtitle align="center">
                                Co-Founder
                            </Card.Subtitle>
                        </Card.Body>
                    </div>
                    <div class='circular-card'>
                        <Card.Img 
                        src = {eldho_pic} 
                        width="150"
                        class="rounded-circle z-depth-2 img-responsive" alt="100x100" 
                        data-holder-rendered="true"/>
                        <Card.Body>
                            <Card.Title align="center">
                                Eldhose Peter
                            </Card.Title>
                            <Card.Subtitle align="center">
                                Co-Founder
                            </Card.Subtitle>
                        </Card.Body>
                    </div>
                </div>

            </div>

            <div className='story'>
                <h1 className ='title' >OUR STORY</h1>
                <p1>
                It was the desire to get out of the mundane college-life and monotonous 
                routine that prompted four friends from Govt. Model Engineering College, 
                to think out of the box and start Instaleague, a community for football 
                lovers in Kochi. The group of four - Samuel Varghese, Thomas George, Aditya Arun
                and Eldhose Peter, have organised 5 tournaments in less than a year in football 
                turfs all over Kochi. 
                </p1>
            </div>
        </div>

            <Footer></Footer>
        </>
    )
}

export default aboutUs
