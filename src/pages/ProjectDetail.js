import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects.js";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <section className="section">
        <p className="muted">Project not found.</p>
        <button className="back-btn" onClick={() => navigate("/projects")}>← Back to Projects</button>
      </section>
    );
  }

  return (
    <section className="section">
      <button className="back-btn" onClick={() => navigate("/projects")}>← Back to Projects</button>

      <div className="project-detail-header">
        <span className="project-category-badge">{project.category === "work" ? "Work" : "Personal"}</span>
        <h2>{project.title}</h2>
      </div>

      {project.image && (
        <img src={project.image} alt={project.title} className="project-detail-cover" />
      )}

      <div className="project-detail-body">
        <p>{project.body}</p>
      </div>

      {project.images && project.images.length > 0 && (
        <div className="project-detail-images">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt={`${project.title} ${i + 1}`} />
          ))}
        </div>
      )}
    </section>
  );
}
