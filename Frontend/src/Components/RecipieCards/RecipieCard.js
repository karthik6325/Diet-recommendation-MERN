import './Card.css';
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

const RecpieCard = (props) => {
  const location = useLocation();
  return (
    <div className='project-card'>
      <img src={props.imgsrc} alt="img" />
      <h2 className='project-title'>{props.title}</h2>
      <div className='pro-details'>
        <p></p>
        <div className='pro-btns'>
          <NavLink to={'/recipie-details'}  state={props} className='btns'>View</NavLink>
        </div>
      </div>
    </div>
  )
}

export default RecpieCard