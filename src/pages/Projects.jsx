/*
import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
// import Projects from './Projects';
// import Experience from './Experience';
// import Conrtacts from './Contacts';

const Projects = () => {
  return (
    <div className="ml-1/2 w-1/2 h-screen overflow-y-scroll p-8 pl-[calc(50%+2rem)]">
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/Contacts" element={<Contacts />} />
        
      </Routes>
    </div>
  );
};

export default Projects;
*/

import React from 'react';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Projects</h2>
      <div className="bg-white p-6 rounded-md shadow-md">
        {/* Add your project list or cards here */}
      </div>
    </section>
  );
}