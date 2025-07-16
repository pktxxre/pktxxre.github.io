/*
import React, { useEffect, useState } from 'react';
import Sidebar from './SideBar';
import About from '../pages/AboutPage';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contacts';
import Skills from '../pages/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import useActiveSection from '../hooks/useActiveSection';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const activeId = useActiveSection(['about', 'experience', 'projects', 'skills', 'contact']);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
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

      <div className="d-flex app-content text-white">
        <Sidebar activeId={activeId} />
        <main className="ms-auto w-50 p-4">
          <section id="about"><About /></section>
          <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
        </main>
      </div>
    </div>
  );
}
*/

import React, { useEffect, useState } from 'react';
import Sidebar from './SideBar';
import About from '../pages/AboutPage';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contacts';
import Skills from '../pages/Skills';
import './App.css';
import useActiveSection from '../hooks/useActiveSection';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeId, setActiveId] = useState('about');
  const sectionInView = useActiveSection(['about', 'experience', 'projects', 'skills', 'contact']);

  useEffect(() => {
    setActiveId(sectionInView);
  }, [sectionInView]);

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

      {/* Main content */}
      <div className="main-layout">
        <div className="left-column">
          <Sidebar activeId={activeId} setActiveId={setActiveId}/>
        </div>
        <div className="right-column">
          <main className="content-sections">
            <section id="about" className="section">
              <About />
            </section>
            <section id="experience" className="section">
              <Experience />
            </section>
            <section id="projects" className="section">
              <Projects />
            </section>
            <section id="skills" className="section">
              <Skills />
            </section>
            <section id="contact" className="section">
              <Contact />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}