import React from 'react'
import './imagebg.css';
import Introimg from '../Assets/about-background-image.png';
import { Link } from 'react-router-dom'

const Imagebg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={Introimg} alt="img" />
            </div>
            <div className='content'>
                <p>Welcome to</p>
                <h1>HealthAI</h1>
                <div>
                    <Link to="/user" className="btn">Try Now</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Imagebg