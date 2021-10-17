import React from 'react'
import '../css/Capabilities.css'
import bag from '../img/bag.svg'
import time from '../img/time.svg'
import defense from '../img/defense.svg'
import delivery from '../img/delivery.svg'
import weblogo from '../img/Group 1165.svg'
import app1 from '../img/icon/13_Home.svg'
import app2 from '../img/icon/14_Nearby list.svg'
import playstore from '../img/icon/google-play-badge.svg'
import applestore from '../img/icon/aivalable-on-the-app-store-2.svg'
import { Card } from 'react-bootstrap'

export default function Capabilities() {
    return (
        <>
            <section className="capabilities">
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <div className="title">
                                <div className="text">
                                    <h3 className="sec-heading">We ask<br/> we provide</h3>
                                </div>
                                <div className="line"></div>
                                <div className="text">
                                    <p className="sec-title">Capabilities</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                        </div>
                        <div className="sec-card">
                            <Card className='card'>
                                <Card.Img className="card-img" variant="top" src={bag} />
                                <Card.Body>
                                    <Card.Title className='card-title'>No Minimum order</Card.Title>
                                    <Card.Text className='card-text'>Deliveries with no minimum order value
                                    </Card.Text>
                                </Card.Body>
                            </Card >
                            <Card className='card'>
                                <Card.Img className="card-img" variant="top" src={time} />
                                <Card.Body>
                                    <Card.Title className='card-title'>Save Time</Card.Title>
                                    <Card.Text className='card-text'>The quickest way to get things delivered
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='card'>
                                <Card.Img className="card-img" variant="top" src={defense} />
                                <Card.Body>
                                    <Card.Title className='card-title'>Safety First</Card.Title>
                                    <Card.Text className='card-text'>Ensuring best practices to keep you and our partners safe at every step!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='card'>
                                <Card.Img className="card-img" variant="top" src={delivery} />
                                <Card.Body>
                                    <Card.Title className='card-title'>Same day delivery</Card.Title>
                                    <Card.Text className='card-text'>Deliveries with no minimum order value
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="sec-download">
                            <div className="sec-text col-md-6">
                                <img src={weblogo} alt="weblogo" />
                                <h3>One app to do it all<br />just ojeck it!</h3>
                                <div className="download">
                                    <a href="home"><img src={playstore} alt="playstore" /></a>
                                    <a href="home"><img src={applestore} alt="applestore" /></a>
                                </div>
                            </div>
                            <div className="sec-img col-md-6">
                                <div className="img1">
                                    <img src={app1} alt="app" />
                                </div>
                                <div className="img2">
                                    <img src={app2} alt="app" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            </section>
        </>
    )
}
