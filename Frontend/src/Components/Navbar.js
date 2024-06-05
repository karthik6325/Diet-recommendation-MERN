import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import FaUser icon
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { GiMuscleUp, GiHotMeal } from "react-icons/gi";
import { useLogin } from '../Context/LoginContext';
import axios from 'axios';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const { userToken, setLoginUser } = useLogin();

    const handleLogout = () => {
        // Perform logout action here
        localStorage.removeItem('userToken');
        // Clear token from cookies if present
        document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
        setLoginUser('');
        // Additional logic like clearing local storage or session storage can be added
    };

    const handleProfileClick = () => {
        // Toggle dropdown menu when profile icon is clicked
        setClick(!click);
    };


    // const clickme = async () => {
    //     try {
    //         const user = {
    //             "Age": 3001,
    //             "Weight": 1000,
    //             "Height": 180,
    //             "DietType": "weight_gain",
    //             "ActivityLevel": "moderately_active"
    //         }
    //         const response = await axios.post(
    //             'http://localhost:3001/api/v1/user/details',
    //             { user },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${userToken}`,
    //                 },
    //             }
    //         );
    //         if(response) console.log("Success");
    //         else console.error("Error!!");
    //     } catch (error) {
    //         console.error("Error!!");
    //         console.error(error.response.data);
    //     }
    // }

    return (
        <div className="header">
            <Link to="/">
                <h1>HealthAI</h1>
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <div className="profile-icon" onClick={handleProfileClick}>
                        {/* Always display the FaUser icon */}
                        <Dropdown>
                            <Dropdown.Toggle className='btnsss' style={{ background: 'rgba(248, 217, 15, 0)', border: '1px solid #ffffff00', padding: 0, color: 'white' }}>

                                <FaUser size={20} style={{ color: 'white' }} />
                            </Dropdown.Toggle>
                            {/* Show dropdown menu */}
                            {userToken ? (
                                <Dropdown.Menu style={{ backgroundColor: 'grey' }}>
                                    <Dropdown.Item href="./profile"><FaUser /> My profile</Dropdown.Item>
                                    <Dropdown.Item href="./diet"><GiHotMeal /> Diet recommendation</Dropdown.Item>
                                    <Dropdown.Item href="http://127.0.0.1:5000"><GiMuscleUp /> Excercise detection</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="./home" onClick={handleLogout}><FaSignOutAlt />  Log out</Dropdown.Item>
                                </Dropdown.Menu>
                            ) : (
                                <Dropdown.Menu style={{ backgroundColor: 'grey' }}>
                                    <Dropdown.Item href="./login">Log in</Dropdown.Item>
                                </Dropdown.Menu>
                            )}
                        </Dropdown>
                    </div>
                </li>
            </ul>
            <div className="hamburger" onClick={() => setClick(!click)}>
                {click ? <FaTimes size={20} style={{ color: 'white' }} /> : <FaBars size={20} style={{ color: 'white' }} />}
            </div>
        </div>
    );
};

export default Navbar;
