import React from 'react';
import '../css/Register.css';
import register1 from '../img/18.svg'
import register2 from '../img/merchant-in-store-holding-tomatoes.svg'
import { Button, FormControl,InputGroup } from 'react-bootstrap';

export default function Register() {
    return (
        <>
            <section className="register">
                <div className="container">
                    <div className="row">
                        <div className="box">
                            <div className="line1"></div>
                            <div className="line2"></div>
                        </div>
                        <div className="main-contain col-md-6">
                            <div className="sec-heading">
                                <h3>Bussiness <br />Registration</h3><div className="line"></div>
                                <p>Register</p>
                            </div>
                            <div className="text">
                                <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since 
                                the 1500s.</p>
                            </div>
                            <div className="form">
                                <form>
                                    <InputGroup className="input">
                                        {/* <span><i class="fas fa-map-marker-alt"></i></span> */}
                                        <FormControl type="text" className="number"
                                        placeholder="Enter phone number"
                                        />
                                    </InputGroup>
                                    <Button type="submit" className="btn number-btn">Submit</Button>
                                </form>
                            </div>
                        </div>
                        <div className="main-img col-md-6">
                            <div className="img1">
                                <img src={register1} alt="register" />
                            </div>
                            <div className="img2">
                                <img src={register2} alt="register" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
