import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Overview from "./pages/Overview";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <HashRouter>
      <div className="app">
        <nav className="nav">
          <NavLink to="/" className="nav-name">Nati Mek</NavLink>
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-active" : ""}>Overview</NavLink>
            <NavLink to="/resume" className={({ isActive }) => isActive ? "nav-active" : ""}>Resume</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-active" : ""}>Projects</NavLink>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>Nati Mek · Hardware Engineer</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
