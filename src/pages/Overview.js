import React from "react";
import headshot from "../headshot_linkedin.jpg";

export default function Overview() {
  return (
    <section className="section overview-section">
      <div className="overview-content">
        <h1>Nati Mek</h1>
        <p className="tagline">Hardware Engineer at Dell Technologies</p>
        <p>
          I am a curious and driven electrical engineer with a background in both
          hardware and software, which gives me a well-rounded perspective on PC system
          architecture. I thrive in fast-paced environments, where being adaptable and
          a quick learner helps me tackle complex technical challenges and meet tight deadlines.
          Above all, I am passionate about hands-on problem solving, and I'm excited
          to continue growing my expertise while making meaningful contributions to a
          collaborative team.
        </p>
        <div className="links">
          <a href="mailto:Nathnaelmek@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/natimekuria/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/NathnaelMek/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <img src={headshot} alt="Nati Mek" className="headshot" />
    </section>
  );
}
