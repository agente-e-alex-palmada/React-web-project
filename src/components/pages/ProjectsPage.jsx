import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import Card from "../Card";
import "./ProjectsPage.css";

const ProjectsPage = () => (
  <div className="projects-page">
    <h2 className="projects-title">Projects</h2>

    <div className="projects-grid">
      {PORTFOLIO_DATA.projects.map((project, i) => (
        <Card key={i} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-cta-link"
          >
            {project.ctaText}
          </a>
          <div className="project-tech">
            {project.tech.map((tech, j) => (
              <span key={j} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <a href={project.link} className="project-link">
            View Project
          </a>
        </Card>
      ))}
    </div>
  </div>
);

export default ProjectsPage;
