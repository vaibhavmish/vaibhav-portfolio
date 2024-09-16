import React from 'react';
import './Navbar.css';
import DarkModeToggle from './DarkModeToggle.js';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
    <nav id="navbar">
       <ul className="nav-links"> 
          <li><Link to="/">HomePage</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Contact">Contact Me</Link></li>
          <li><a id="profile-link" href="https://github.com/vaibhavmish" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <DarkModeToggle/>
       </ul>     
    </nav>
   )
}

export default Navbar;