import React from 'react';
import '../css/Home.css';
import Homeimg from '../img/8934@2x.png';
// import music from '../img/icon/Polygon 1.svg';
import Categories from './Categories';

import { Button, FormControl,InputGroup } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="row">
                        <div className="text-sec col-md-6">
                            <h1>Providing Service <br />With Humble</h1> 
                            <p>Need groceries, food or pet supplies delivered?</p>
                            <div className="form">
                                <form>
                                    <InputGroup className="input">
                                        {/* <span><i class="fas fa-map-marker-alt"></i></span> */}
                                        <FormControl type="text" className="search"
                                        placeholder="Search location"
                                        />
                                    </InputGroup>
                                    <Button className="btn search-btn">Proceed</Button>
                                </form>
                            </div>
                            <div className="city">
                                <a href="home">Bangalore</a>
                                <a href="home">Pune</a>
                                <a href="home">Gurgaon</a>
                            </div>
                        </div>
                        <div className="img-sec col-md-6">
                            {/* <Button className='btn'><img src={music} alt="music" /></Button> */}
                            <img src={ Homeimg } alt="Home" />
                        </div>
                        {/* Import element */}
                        <Categories/> 
                    </div>
                </div>
            </section>
        </>
    )
}