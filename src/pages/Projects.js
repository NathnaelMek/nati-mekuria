import React from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects.js";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="project-card" onClick={() => navigate(`/projects/${project.id}`)}>
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card-placeholder">
            <span>No image yet</span>
          </div>
        )}
      </div>
      <div className="project-card-body">
        <h4>{project.title}</h4>
        <p>{project.summary}</p>
        {project.category === "work" && project.company && (
          <p className="project-card-company">{project.company}</p>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const workProjects = projects.filter(p => p.category === "work");
  const personalProjects = projects.filter(p => p.category === "personal");

  return (
    <section className="section">
      <h2>Projects</h2>

      <div className="subsection">
        <h3>Work Projects</h3>
        <div className="projects-grid">
          {workProjects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      <div className="subsection">
        <h3>Personal Projects</h3>
        <p className="section-note">these projects are still in the beginning phases — (started 05/2026). <br></br> Progress will be updated as the projects move along.</p>
        <div className="projects-grid">
          {personalProjects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
