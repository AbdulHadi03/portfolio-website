import React from 'react';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Main from './components/Main';
import Resume from './components/Resume';
import './App.css';

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <button onClick={() => scrollToSection("main-section")}>Home</button>
        <button onClick={() => scrollToSection("projects-section")}>Projects</button>
        <button onClick={() => scrollToSection("resume-section")}>Resume</button>
        <button onClick={() => scrollToSection("contact-section")}>Contact</button>
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
