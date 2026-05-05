import React from "react";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <section className="section">
      <div className="resume-header">
        <h2>Resume</h2>
        <div className="resume-actions">
          <button
            className="resume-btn"
            onClick={() => alert("Add your PDF link in src/pages/Resume.js")}
          >
            Download PDF
          </button>
        </div>
      </div>

      <div className="subsection">
        <h3>Experience</h3>
        <div className="entry">
          <div className="entry-header">
            <strong>Hardware Engineer</strong>
            <span className="entry-date">2022 – Present</span>
          </div>
          <div className="entry-company">Dell Technologies</div>
          <ul>
            <li>
              <Link to="/projects/secure-usb-module">Secure USB Option Module</Link> — PCB design, schematic capture, and validation
            </li>
            <li>Contextual Awareness Project — System validation testing (SVT)</li>
            <li>Signal integrity analysis and power delivery optimization</li>
            <li>Cross-functional collaboration with firmware, mechanical, and manufacturing teams</li>
          </ul>
        </div>
      </div>

      <div className="subsection">
        <h3>Patents</h3>
        <div className="entry">
          <div className="entry-header">
            <strong>
              Inventor — <Link to="/projects/secure-usb-module">Secure USB</Link>
            </strong>
            <span className="entry-date">Pending (2 U.S. Applications)</span>
          </div>
          <p>Hardware/software system to control and secure USB device interactions at the system level.</p>
          <p className="muted">
            Publications:{" "}
            <a href="https://patents.google.com/patent/US20250335642A1" target="_blank" rel="noreferrer">US 20250335642 A1</a>,{" "}
            <a href="https://patents.google.com/patent/US20250390614A1" target="_blank" rel="noreferrer">US 20250390614 A1</a>
          </p>
        </div>
      </div>

      <div className="subsection">
        <h3>Education</h3>
        <div className="entry">
          <div className="entry-header">
            <strong>B.S. Computer Engineering</strong>
            <span className="entry-date">2022</span>
          </div>
          <div className="entry-company">University of Texas at Dallas</div>
        </div>
      </div>

      <div className="subsection">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div>
            <h4>ECAD</h4>
            <p>Cadence (OrCAD, Allegro), Altium Designer, KiCad</p>
          </div>
          <div>
            <h4>Simulation</h4>
            <p>LTSPICE, PSPICE</p>
          </div>
          <div>
            <h4>Lab Equipment</h4>
            <p>Oscilloscopes, Logic Analyzers, VNAs, Spectrum Analyzers</p>
          </div>
          <div>
            <h4>Programming</h4>
            <p>Python, C/C++</p>
          </div>
          <div>
            <h4>Other</h4>
            <p>SI/PI, EMC/EMI, High-Speed Design, Soldering, Capacitive Sensing, System Architecture, Vendor Communication</p>
          </div>
        </div>
      </div>
    </section>
  );
}
