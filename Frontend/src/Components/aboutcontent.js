import './aboutcontent.css';
import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../Assets/about-background-image.png';
import React2 from '../Assets/about-background-image.png';

const aboutcontent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>About Us</h1>
            <p>Health AI is a beacon of innovation in today's health-centric era, seamlessly merging technology and healthcare. Whether enhancing fitness routines or optimizing dietary choices, it serves as a trusted companion in the pursuit of a healthier, happier life.
</p>
        <Link to='/contact'>
            <button className='btn'>Contact</button>
        </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className='img' alt='true'/>
                </div>
                <div className='img-stack bottom'>
                    <img src={React2} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default aboutcontent