import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import Card from "../Card";
import "./ExperiencePage.css";

const ExperiencePage = () => (
  <div className="experience-page">
    <h2 className="experience-title">Experience</h2>

    <div className="experience-list">
      {PORTFOLIO_DATA.experience.map((exp, i) => (
        <Card key={i} className="experience-card">
          <div className="experience-header">
            <h3 className="experience-job-title">{exp.title}</h3>
            <span className="experience-period">{exp.period}</span>
          </div>
          <p className="experience-company">{exp.company}</p>
          <p className="experience-description">{exp.description}</p>
        </Card>
      ))}
    </div>
  </div>
);

export default ExperiencePage;
