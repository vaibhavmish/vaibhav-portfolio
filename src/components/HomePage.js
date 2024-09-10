import React from 'react';
import "./HomePage.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AboutMe from './AboutMe.js'

function HomePage(){
	return(
   <section id="welcome-section">
      <h1>Vaibhav Mishra</h1>
      <p id="hello">Hello, I am a <b><i>Web Developer</i></b></p>
      <AboutMe/>
      <span className="link"><a id="gitHub-link" href="https://github.com/vaibhavmish" target="_blank" rel="noopener noreferrer">
        <FaGithub/>
      </a>
      </span>
      <span className="link"><a id="github-link" href="https://github.com/vaibhavmish" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      </span>
    </section>
    )
}

export default HomePage;