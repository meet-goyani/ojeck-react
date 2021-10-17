import React from 'react';
import '../css/Home.css';
import Homeimg from '../img/8934@2x.png';
import supericon from '../img/icon/Layer_1.svg';
import fork from '../img/icon/fork.svg';
import medicine from '../img/icon/medicine.svg';
import monitor from '../img/icon/monitor.svg';
import leaf from '../img/icon/leaf.svg';
import iron from '../img/icon/iron.svg';
import scissor from '../img/icon/scissor.svg';
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
                            <img src={ Homeimg } alt="Home" />
                        </div>
                        <div className="categories">
                            <h3>Explore our categories</h3>
                            <div className="cat-btn col-md-12 col-md-6 col-sm-3 p-0">
                                <div className="super-marke">
                                    <Button className='btn1 shadow'> <img src={supericon} alt="super" /> </Button>
                                    <p>Super Market</p>
                                </div>
                                <div className="restaurents">
                                    <Button className='btn2 shadow'><img src={fork} alt="fork" /></Button>
                                    <p>Restaurents</p>
                                </div>
                                <div className="pharmacy">
                                    <Button className='btn3 shadow'><img src={medicine} alt="medicine" /></Button>
                                    <p>Pharmacy</p>
                                </div>
                                <div className="Electronics">
                                    <Button className='btn4 shadow'><img src={monitor} alt="monitor" /></Button>
                                    <p>Electronics</p>
                                </div>
                                <div className="Nursery">
                                    <Button className='btn5 shadow'><img src={leaf} alt="leaf" /></Button>
                                    <p>Nursery</p>
                                </div>
                                <div className="Laudary">
                                    <Button className='btn6 shadow'><img src={iron} alt="iron" /></Button>
                                    <p>Laudary</p>
                                </div>
                                <div className="Hair Saloon">
                                    <Button className='btn7 shadow'><img src={scissor} alt="scissor" /></Button>
                                    <p>Hair Saloon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}