import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import DarkModeToggle from './DarkModeToggle.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);  
  const prevScrollY = useRef(0);  

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        // User scrolled down more than the threshold
         console.log("sadasd", currentScrollY, prevScrollY.current);
        setIsHidden(true);
      } else if(currentScrollY < prevScrollY.current){
        // User scrolled up more than the threshold
         console.log("else", currentScrollY, prevScrollY.current);
        setIsHidden(false);
      }

      // Update the previous scroll position
      prevScrollY.current = currentScrollY;
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the scroll listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return(
    <nav className={`navbar ${isHidden ? "hidden" : ""}`}>
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