/*import React from 'react';
import { AboutNav } from './Nav';
import PetPage from './PetPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import Footer from './Footer'

function App(props) {
  return (
    <div>
      <AboutNav />
      <AboutPage />
      <PetPage />
      <SkillsPage />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

export default function App() {
  return (
    <div className="flex font-sans">
      <Sidebar />
      <div className="ml-[33.3333%] w-[66.6666%] h-screen overflow-y-scroll px-8 py-12 space-y-24">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AboutNav />
      <main className="flex-grow-1">
        <AboutPage />
        <PetPage />
        <SkillsPage />
      </main>
      <Footer />
    </div>
  );
} */

import React, { useState } from 'react';
import Sidebar from './SideBar';
import About from '../pages/AboutPage';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contacts';
import Skills from '../pages/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const backgroundStyle = {
    backgroundColor: '#121212',
    backgroundImage: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    minHeight: '100vh',
    width: '100vw',
  };

  return (
    <div style={backgroundStyle} onMouseMove={handleMouseMove} className="d-flex">
      <Sidebar />
      <div className="ms-auto w-50 vh-100 overflow-auto p-4 text-white">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}