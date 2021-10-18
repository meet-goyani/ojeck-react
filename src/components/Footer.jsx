import React from 'react';
import '../css/Footer.css';
import footerlogo from '../img/footer-logo.svg';
import facebook from '../img/icon/facebook-fill.svg';
import twitter from '../img/icon/twitter-fill.svg';
import linkedin from '../img/icon/linkedin-fill.svg';
import mail from '../img/icon/mail-fill.svg';
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-logo col-md-3">
                            <img src={footerlogo} alt="footer-logo" />
                            <h3>Ojeck</h3>
                        </div>
                        <div className="main-contain col-md-9">
                            <div className="ojeck col-md-3">
                                <h5>Ojeck</h5>
                                <a href="home">About</a>
                                <a href="home">Jobs</a>
                                <a href="home">Ojeck for partner</a>
                            </div>
                            <div className="company col-md-3">
                                <h5>Company</h5>
                                <a href="home">Contact</a>
                                <a href="home">Terms & Conditions</a>
                                <a href="home">Privacy Policy</a>
                            </div>
                            <div className="cites col-md-3">
                                <h5>Cites</h5>
                                <a href="home">Banglore</a>
                                <a href="home">Pune</a>
                                <a href="home">Pune</a>
                            </div>
                            <div className="social col-md-4">
                                <h5>Social</h5>
                                <a href="home" className='btn'><img src={facebook} alt="facebook" /></a>
                                <a href="home" className='btn'><img src={twitter} alt="twitter" /></a>
                                <a href="home" className='btn'><img src={linkedin} alt="linkedin" /></a>
                                <a href="home" className='btn'><img src={mail} alt="mail" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
