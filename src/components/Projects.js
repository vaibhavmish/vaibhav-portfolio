import React from "react";
import './Projects.css';
import projectData from "./projectsData.js";


const Project =({title, description, image})=>(
	<div className="project-card">
	  <img src ={image} alt={title} className="project-image" />
	  <h3 className="project-title">{title}</h3>
	  <p className="project-description">{description}</p>
	</div>
);

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map(project => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};


export default Projects;