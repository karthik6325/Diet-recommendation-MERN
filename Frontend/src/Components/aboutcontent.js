import './aboutcontent.css';
import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../Assets/about-background-image.png';
import React2 from '../Assets/about-background-image.png';

const aboutcontent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>About me</h1>
            <p>Currently persuing Btech in GL Bajaj. I am a MERN stack developer and I am also into competitive programming. I am always enthusiastic to learn new things.</p>
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