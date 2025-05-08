import projectData from '../../content/projectContent';
import './Projects.css'; // Make sure this CSS file is imported

function Projects() {
    return (
        <div className="projects-container">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((techItem, idx) => (
                    <span key={idx} className="tech-badge">{techItem}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Projects;