import React, { useState } from 'react';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Main from './components/Main';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close menu on selection (for mobile)
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("main-section")}>Home</button>
          <button onClick={() => scrollToSection("projects-section")}>Projects</button>
          <button onClick={() => scrollToSection("resume-section")}>Resume</button>
          <button onClick={() => scrollToSection("contact-section")}>Contact</button>
        </div>
      </nav>

      {/* Sections */}
      <div id="main-section">
        <Main />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="resume-section">
        <Resume />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
