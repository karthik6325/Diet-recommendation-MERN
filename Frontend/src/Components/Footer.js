import React from 'react'
import './Footer.css';
import {FaHome,FaMailBulk, FaGithub, FaLinkedin} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>India</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <p>Empowering Health Through AI: Your Personalized Wellness Companion</p>
            </div>
        </div>
    </div>
  )
}

export default Footer