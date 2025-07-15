import React, { useState } from 'react';
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

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const backgroundStyle = {
    backgroundColor: '#121212',
    backgroundImage: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    minHeight: '100vh',
    width: '100vw',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
  };

  return (
    <div style={backgroundStyle} onMouseMove={handleMouseMove} className="d-flex overflow-auto">
      <Sidebar activeId={activeId} />
      <main className="ms-auto w-50 vh-100 overflow-auto p-4 text-white">
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}