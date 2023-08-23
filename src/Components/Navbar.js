import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
export default function Navbar(props) {
  
  return (
    
        <div style={{backgroundColor:props.mode}}>
       <div className="form-check form-switch">
  <input className="form-check-input"  type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
  <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/">
        Text Area
      </Link>
</div>
      I am a Navbar component.
    </div>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired, // Correct capitalization
    about: PropTypes.string, // Correct capitalization
    toggleMode: PropTypes.func
   
  };
 