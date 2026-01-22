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
  const projects = [
    {
      title: "UW Study Hub",
      description: "Collaborated with a team of four to design a responsive platform that improves study efficiency for University of Washington students, making it easier to create, store, and review flashcards on any device.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      image: uw-hub-logo.png,
      github: "https://github.com/info340-wi25a/project-SantiagoG14",
    },
    {
      title: "Revivo",
      description: "Collaborated with a team of three to design a sustainability-focused app supporting the Right to Repair movement, using Figma to prototype features that help students reduce electronic waste.",
      technologies: ["Figma", "Usability testing", "User testing", "User research", "Prototyping"],
      image: "/Revivo.png",
      demo: "https://www.figma.com/proto/0FlEqTnLaHVyFTnfLRvJ4r/Revivo?node-id=189-1318&p=f&t=SDFonaZgSGx7WEM8-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A35&starting-point-node-id=189%3A1318"
    }
    /*
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts. Features location-based weather data, search functionality, and beautiful data visualizations.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Geolocation API"],
      image: "/api/placeholder/120/80",
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-dashboard-demo.surge.sh"
    } */
  ];

  return (
    <div className="projects-content">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-content">
            <h3>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links" style={{ marginTop: '16px' }}>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ marginRight: '16px' }}
              >
                GitHub
              </a>
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}