import React, { useEffect, useState } from 'react';
import Sidebar from './SideBar';
import About from '../pages/AboutPage';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import './App.css';
import useActiveSection from '../hooks/useActiveSection';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const activeId = useActiveSection(['about', 'experience', 'projects', 'skills']);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      {/* SVG gradient layer */}
      <svg className="gradient-overlay">
        <defs>
          <radialGradient id="mouseGradient" r="0.4">
            <stop offset="0%" stopColor="rgba(29, 78, 216, 0.15)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="300"
          fill="url(#mouseGradient)"
        />
      </svg>

      <div className="main-layout">
        <div className="left-column">
          <Sidebar activeId={activeId} />
        </div>
        <div className="right-column">
          <main className="content-sections">
            <section id="about" className="section">
              <h1 className="section-header">About</h1>
              <About />
            </section>
            <section id="experience" className="section">
              <h1 className="section-header">Experience</h1>
              <Experience />
            </section>
            <section id="projects" className="section">
              <h1 className="section-header">Projects</h1>
              <Projects />
            </section>
            <section id="skills" className="section">
              <h1 className="section-header">Skills</h1>
              <Skills />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}