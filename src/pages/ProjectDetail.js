import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects.js";

function ContentBlock({ block }) {
  switch (block.type) {
    case "paragraph":
      return <p dangerouslySetInnerHTML={{ __html: block.text }} />;

    case "heading":
      return <h3 className="content-heading">{block.text}</h3>;

    case "list":
      return (
        <ul className="content-list">
          {block.items.map((item, i) => {
            if (typeof item === 'string') {
              return <li key={i} dangerouslySetInnerHTML={{ __html: item }} />;
            }
            return (
              <li key={i}>
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
                {item.subItems && (
                  <ul>
                    {item.subItems.map((sub, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: sub }} />
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      );

    case "image":
      return (
        <figure className="content-figure">
          <img src={block.src} alt={block.caption || ""} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    case "video":
      return (
        <figure className="content-figure">
          <video controls preload="metadata">
            <source src={block.src} />
            Your browser does not support the video tag.
          </video>
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    case "table":
      return (
        <div className="content-table-wrapper">
          <table className="content-table">
            {block.headers && (
              <thead>
                <tr>
                  {block.headers.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
}

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

      {project.image && !project.image2 && (
        <img src={project.image} alt={project.title} className="project-detail-cover" />
      )}
      {project.image && project.image2 && (
        <div className="project-detail-cover-row">
          <img src={project.image} alt={project.title} />
          <img src={project.image2} alt={`${project.title} — architecture`} />
        </div>
      )}
      {project.imageDisclaimer && (
        <p className="project-detail-disclaimer">{project.imageDisclaimer}</p>
      )}

      <div className="project-detail-body">
        {project.content && project.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
        {/* Fallback for old body format */}
        {!project.content && project.body && <p>{project.body}</p>}
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
