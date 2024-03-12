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
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>karthik63254@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About</h4>
                <p>I am a MERN stack developer. I am always enthusiastic to learn new things.</p>
                <div className='social'>
                    <Link to='https://www.linkedin.com/in/karthik-h-3b6332192/'><FaLinkedin size={22} style={{color:'#fff',marginRight:'1rem'}}/></Link>
                    <Link to='https://github.com/karthik6325'><FaGithub size={22} style={{color:'#fff',marginRight:'1rem'}}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer