import React from 'react';
import './Navbar.css';

function Navbar() {
    return(
    <nav id="navbar">
       <ul className="nav-links"> 
          <li><a href="#welcome-section">Welcome</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
          <li><a id="profile-link" href="https://github.com/vaibhavmish" target="_blank" rel="noopener noreferrer">GitHub</a></li>
       </ul>     
    </nav>
   )
}

export default Navbar;