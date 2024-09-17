import React from "react";
import './Projects.css';
import projectData from "./projectsData.js";


const Project =({title, description, video, image})=>(
	<div className="project-card">
    {video?( 
    <video autoPlay muted loop src={video} className="project-video"></video>
    )
	  :(<img src ={image} alt={title} className="project-image" />
    )}
	  <h3 className="project-title">{title}</h3>
	  <p className="project-description">{description}</p>
	</div>
);

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projectData.map(project => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.imageUrl}
            video={project.videoUrl}
          />
        ))}
      </div>
    </section>
  );
};


export default Projects;