import React from 'react'
import supericon from '../img/icon/Layer_1.svg';
import fork from '../img/icon/fork.svg';
import medicine from '../img/icon/medicine.svg';
import monitor from '../img/icon/monitor.svg';
import leaf from '../img/icon/leaf.svg';
import iron from '../img/icon/iron.svg';
import scissor from '../img/icon/scissor.svg';
import { Button } from 'react-bootstrap';

export default function Categories() {
    return (
        <>
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
        </>
    )
}