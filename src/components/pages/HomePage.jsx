import React from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import Card from "../Card";
import "./HomePage.css";

const HomePage = () => (
  <div className="home-page">
    <div className="home-hero">
      <div className="home-avatar">👋</div>
      <h1 className="home-name">{PORTFOLIO_DATA.name}</h1>
      <p className="home-title">{PORTFOLIO_DATA.title}</p>
    </div>

    <Card>
      <p className="home-about">{PORTFOLIO_DATA.about}</p>
    </Card>

    <div className="home-contact">
      {[
        {
          label: "Email",
          value: PORTFOLIO_DATA.email,
          href: `mailto:${PORTFOLIO_DATA.email}`,
        },
        {
          label: "GitHub",
          value: "GitHub Profile",
          href: PORTFOLIO_DATA.github,
        },
        {
          label: "LinkedIn",
          value: "LinkedIn Profile",
          href: PORTFOLIO_DATA.linkedin,
        },
      ].map((contact, i) => (
        <a key={i} href={contact.href} className="home-contact-link">
          {contact.value}
        </a>
      ))}
    </div>
  </div>
);

export default HomePage;
