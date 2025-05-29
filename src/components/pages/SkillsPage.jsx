import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import Card from "../Card";
import "./SkillsPage.css";

// Add a list of emojis to randomly pick from
const skillEmojis = [
  "⚡",
  "🚀",
  "🧠",
  "💻",
  "🔥",
  "🛠️",
  "📦",
  "🎯",
  "🔧",
  "📡",
];

const SkillsPage = () => (
  <div className="skills-page">
    <h2 className="skills-title">Skills & Technologies</h2>

    <div className="skills-grid">
      {PORTFOLIO_DATA.skills.map((skill, i) => {
        const randomEmoji =
          skillEmojis[Math.floor(Math.random() * skillEmojis.length)];
        return (
          <Card key={i} className="skills-card">
            <div className="skills-icon">{randomEmoji}</div>
            <p className="skills-name">{skill}</p>
          </Card>
        );
      })}
    </div>
  </div>
);

export default SkillsPage;
