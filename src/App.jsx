import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavButton from "./components/NavButton";
import HomePage from "./components/pages/HomePage";
import SkillsPage from "./components/pages/SkillsPage";
import ExperiencePage from "./components/pages/ExperiencePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          {/* Navigation */}
          <nav className="app-nav">
            <NavButton to="/">Home</NavButton>
            <NavButton to="/skills">Skills</NavButton>
            <NavButton to="/experience">Experience</NavButton>
            <NavButton to="/projects">Projects</NavButton>
          </nav>

          {/* Content */}
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="app-footer">
            <p>
              This page was made by me and a LOT of help of Claude and ChatGPT
              (I hate Frontend)
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
