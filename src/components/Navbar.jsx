import React from 'react'
import '../css/Navbar.css'
import { Button } from 'react-bootstrap'
import logo from '../img/Group 1165.svg'
import user from '../img/user-line.svg'
import cart from '../img/shopping-cart-line.svg'

export default function Navbar() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <img src={logo} alt="logo"/>
                        <div className="manu">
                            <Button className="btn1">Become a sellar</Button>
                            <Button className="btn2"><span><img src={user} alt="user" /></span></Button>
                            <Button className="btn2"><span><img src={cart} alt="cart" /></span></Button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
