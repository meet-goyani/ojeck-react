import React from 'react';
import '../css/Testimonial.css';
import person1 from '../img/icon/person1.svg';
import person2 from '../img/icon/person2.svg';
import person3 from '../img/icon/person3.svg';
import comma from '../img/icon/comma.svg';
export default function Testimonial() {
    return (
        <>
            <section className='testimonial'>
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <div className="box">
                                <div className="line1"></div>
                                <div className="line2"></div>
                            </div>
                            <div className="sec-title">
                                <p className='text'>Testimonial</p>
                                <div className="line"></div>
                                <div className="sec-heading">
                                    <h3 className='text'>What <br/>they said</h3>
                                </div>
                            </div>                            
                        </div>
                        <div className="main-review">
                            <div className="main-profile col-md-5">
                                <div className="person">
                                    <div className="person-img">
                                        <img src={person1} alt="person" />
                                    </div>
                                    <div className="p-name">
                                        <h6>Deren Marson</h6>
                                        <p>26, Delhi</p>
                                    </div>
                                </div>
                                <div className="person">
                                    <div className="person-img">
                                        <img src={person2} alt="person" />
                                    </div>
                                    <div className="p-name">
                                        <h6>Deren Marson</h6>
                                        <p>26, Delhi</p>
                                    </div>
                                </div>
                                <div className="person">
                                    <div className="person-img">
                                        <img src={person3} alt="person" />
                                    </div>
                                    <div className="p-name">
                                        <h6>Deren Marson</h6>
                                        <p>26, Delhi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="review col-md-7">
                                <div className="main-contain">
                                    <img src={comma} alt="comma" />
                                    <p>Ojeck is the best app ever. They'll get you anything you need 24*7. 
                                        Even if it's a pack of cigarettes after 12 midnight they'll get it 
                                        delivered and delivered fast! Great user experience.   
                                        I'm a happy customer.</p>
                                    <div className="circle">
                                        <div className="circle1"></div>
                                        <div className="circle1"></div>
                                        <div className="circle1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
