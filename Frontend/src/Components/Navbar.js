import './Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from  'react-icons/fa';
import React, { useState } from 'react'


const Navbar = () => {
    const [click,setclick]=useState(false);
    const handleclick = () => setclick(!click);
    const[color, setColor]=useState(false);
    const changeColor=()=>{
        if(window.ShadowRoot.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor);


    return (
        <div className={color?'header header-bg':'header'}>
            <Link to="/">
                <h1>HealthAI</h1>
            </Link>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleclick}>
                {click?(
                    <FaTimes size={20} style={{color:'white'}}/>
                ):(
                    <FaBars size={20} style={{color:'white'}}/>
                )}
            </div>
        </div>
    )
}

export default Navbar;