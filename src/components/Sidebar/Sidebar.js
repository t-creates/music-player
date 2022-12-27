/* eslint-disable */
import React, {useState, useRef} from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';


import './Sidebar.css';
import {images } from '../../Constants';

const Sidebar = () => {

  return(
    <ul className="Sidebar">
        <img src={images.logo} alt="logo" className='logo'/>
      <div className="lists">
        <span>Home</span>
        <span>Explore</span>
        <span>Country</span>
        <span>Artists</span>
        </div>
     
        
  </ul>
  );
}

export default Sidebar;
