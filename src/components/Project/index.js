import React from 'react';

function Project ({ project })  { 
    return (
      <section className="project-container">
        <figure
          className="c4-izmir c4-border-bottom-left c4-gradient-bottom-right"
          tabindex="0"
        >
          <img className="project-img"
            src={require(`../../assets/images/${project.key}.png`).default}
            alt={project.imageDescription}
    />
          <figcaption className="c4-layout-bottom-left">
            <div className="c4-reveal-right c4-delay-100">
              <h2>{project.title}</h2>
              <div className="project-text">
              <p><span>Link: </span><a href={project.githubUrl} target="">GitHub Repository</a></p>  
                  <p><span>Link:</span><a href={project.deployedUrl} target="">Deployed Application</a></p>
                <p><span>Languages/Tools:</span> {project.languages}</p>
                <p><span>Description:</span> {project.description}</p>
                <p><span>Date:</span> {project.date}</p>
              </div>
            </div>
          </figcaption>
        </figure>
      </section>
    );
  };
  
  export default Project;