import React, { useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () =>{

const [darkMode, setDarkMode]=useState("false");
const toggleDarkMode = () =>{
   document.body.classList.toggle('dark-mode');
   setDarkMode(!darkMode);
}

return(
 <button className="toggle-button" onClick={toggleDarkMode}>
   {darkMode ? 'Light Mode' : 'Dark Mode'}
 </button>
);

};

export default DarkModeToggle;
