import React from "react";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <section className="section">
      <div className="resume-header">
        <h2>Resume</h2>
        <div className="resume-actions">
          <a
            className="resume-btn"
            href={process.env.PUBLIC_URL + "/nati_mekuria_resume.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Profile */}
      <div className="subsection">
        <h3>Profile</h3>
        <p>
          Motivated electrical engineer with hardware and software experience and
          an understanding of PC system architecture. Quick learner who adapts
          well in fast-paced environments and works effectively with stakeholders
          to meet tight deadlines. Passionate about solving problems and eager to
          gain hands-on experience and contribute to innovative and impactful
          projects.
        </p>
      </div>

      {/* Experience */}
      <div className="subsection">
        <h3>Experience</h3>

        {/* Dell — Rotation Program */}
        <div className="entry">
          <div className="entry-header">
            <strong>Hardware Engineering Rotation Program</strong>
            <span className="entry-date">February 2023 – Present</span>
          </div>
          <div className="entry-company">Dell Inc., Austin, TX</div>
          <ul>
            <li>
              Option module complexity reduction by investigating feasibility of
              a USB to serial conversion to remove $0.13 connector cost adder to
              high-volume platform (Dell Optiplex, 10M+ units/year).
            </li>
            <li>
              2 patents pending for{" "}
              <Link to="/projects/secure-usb-module">Secure USB</Link> IP, a
              hardware-based USB traffic monitoring solution ({" "}
              <a
                href="https://patents.google.com/patent/US20250335642A1"
                target="_blank"
                rel="noreferrer"
              >
                US 20250335642 A1
              </a>{" "}
              and{" "}
              <a
                href="https://patents.google.com/patent/US20250390614A1"
                target="_blank"
                rel="noreferrer"
              >
                US 20250390614 A1
              </a>
              ).
            </li>
            <li>
              Independently designed and developed a PCB proof of concept to
              validate Secure USB IP (idea to gerberout).
            </li>
            <li>
              Traveled abroad to Mexico and Taiwan for hands-on lab training and
              factory visits to observe high-volume consumer electronics
              manufacturing (SMT line, progressive die stamping, injection
              molding, etc.).
            </li>
            <li>
              Built a custom{" "}
              <Link to="/projects/dust-chamber">Dust Chamber</Link> to
              investigate high-dust-related recall issues on Inspiron devices in
              India.
            </li>
            <li>
              Architected a low-power{" "}
              <Link to="/projects/contextual-awareness-svt">
                contextual sensing system
              </Link>{" "}
              using an MCU with an integrated NPU and multiple sensors to detect
              device context (in bag, on desk, user presence, etc.) using
              in-house lightweight ML classification models.
            </li>
            <li>
              Developed an evaluation dev kit for the sensing architecture to
              support early SW/FW development — responsible for architecture and
              schematic.
            </li>
            <li>
              Evaluated self-capacitance sensing technology for human touch and
              proximity detection using the laptop metal housing as the sensing
              node. Developed multiple POC iterations to improve proximity
              performance, achieving 2–3 ft detection range with a floating
              housing design.
            </li>
            <li>
              Led testing efforts to evaluate and mitigate the negative effects
              of a floating housing (RF desense, EMI, and ESD).
            </li>
            <li>
              Conducted competitive benchmarks across 20 systems. Automated
              benchmark running, data collection, and reporting with scripts.
            </li>
            <li>
              OrCAD schematic capture for ARL-based notebook — responsible for
              HDMI, EC, and DC-DC converters.
            </li>
            <li>
              Wrote a script for netlist comparisons. Helped the team save time
              with redrawing schematics.
            </li>
            <li>
              Leveraged AI to develop a full-stack competitive analysis platform
              using a React frontend, Python FastAPI backend, and PostgreSQL
              database.
            </li>
          </ul>
        </div>

        {/* Dell — Systems Architect Intern */}
        <div className="entry">
          <div className="entry-header">
            <strong>Undergraduate Systems Architect Intern</strong>
            <span className="entry-date">June 2022 – August 2022</span>
          </div>
          <div className="entry-company">Dell Inc., Austin, TX</div>
          <ul>
            <li>
              Helped develop a standard module connector pinout, addressing
              high-speed PCB issues such as crosstalk, impedance matching,
              shielding, and connector cost tradeoffs.
            </li>
          </ul>
        </div>

        {/* Dell — EE Intern */}
        <div className="entry">
          <div className="entry-header">
            <strong>Undergraduate Electrical Engineer Intern</strong>
            <span className="entry-date">May 2021 – August 2021</span>
          </div>
          <div className="entry-company">Dell Inc., Austin, TX</div>
          <ul>
            <li>
              Routed an SLI bridge for the Nvidia GV100 card that would be
              utilized on a Dell Precision tower.
            </li>
          </ul>
        </div>

        {/* Dell — BIOS Intern */}
        <div className="entry">
          <div className="entry-header">
            <strong>Undergraduate BIOS Intern</strong>
            <span className="entry-date">June 2020 – July 2020</span>
          </div>
          <div className="entry-company">Dell Inc., Austin, TX</div>
          <ul>
            <li>
              Implemented Bluetooth 4.0 in BIOS by integrating a Bluetooth
              driver to enable Bluetooth device connection on pre-boot.
            </li>
          </ul>
        </div>

        {/* Nokia */}
        <div className="entry">
          <div className="entry-header">
            <strong>5G RAN E2E Testing and Automation Intern</strong>
            <span className="entry-date">June 2019 – August 2019</span>
          </div>
          <div className="entry-company">Nokia, Irving, TX</div>
          <ul>
            <li>
              Built a Python GUI app to automate Excel-to-JIRA data entry,
              saving ~1.5 hours of manual work per use.
            </li>
          </ul>
        </div>
      </div>

      {/* Patents */}
      <div className="subsection">
        <h3>Patents</h3>
        <div className="entry">
          <div className="entry-header">
            <strong>
              Inventor —{" "}
              <Link to="/projects/secure-usb-module">Secure USB</Link>
            </strong>
            <span className="entry-date">Pending (2 U.S. Applications)</span>
          </div>
          <p>
            Hardware/software system to control and secure USB device
            interactions at the system level.
          </p>
          <p className="muted">
            Publications:{" "}
            <a
              href="https://patents.google.com/patent/US20250335642A1"
              target="_blank"
              rel="noreferrer"
            >
              US 20250335642 A1
            </a>
            ,{" "}
            <a
              href="https://patents.google.com/patent/US20250390614A1"
              target="_blank"
              rel="noreferrer"
            >
              US 20250390614 A1
            </a>
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="subsection">
        <h3>Education</h3>
        <div className="entry">
          <div className="entry-header">
            <strong>B.S. Computer Engineering</strong>
            <span className="entry-date">December 2022</span>
          </div>
          <div className="entry-company">
            The University of Texas at Dallas
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="subsection">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div>
            <h4>System Design</h4>
            <p>System Architecture, Vendor Engagement</p>
          </div>
          <div>
            <h4>ECAD</h4>
            <p>Cadence (OrCAD, Allegro), KiCad, basic TCL/SKILL scripting</p>
          </div>
          <div>
            <h4>Lab &amp; Hardware</h4>
            <p>Basic Soldering/Rework, Lab Equipment</p>
          </div>
          <div>
            <h4>Programming</h4>
            <p>Python, C/C++, Git</p>
          </div>
        </div>
      </div>
    </section>
  );
}
