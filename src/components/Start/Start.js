/* eslint-disable */
import React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import { images } from '../../Constants';
import './Start.css';

const Start = () => {
return ( 
      <div className="login"> 
      <div className="d-visibility">
        <span className="music_text"> Music App</span>
        <img src = {images.logo} alt ="logo" />  
          <Link to="/home"
            className="a a-primary " > Start 
          </Link>
      </div>
    </div>
    
    
    );
  };

export default Start;
