import React from 'react';
import "./welcomeSection.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function WelcomeSection(){
	return(
   <section id="welcome-section">
      <h1>Vaibhav Mishra</h1>
      <p>Hello, I am a Web Developer</p>
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

export default WelcomeSection;