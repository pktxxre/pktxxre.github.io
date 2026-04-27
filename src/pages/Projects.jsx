import React from 'react';
import uwHubLogo from '../components/img/StudyHub/uw-hub-logo.png';
import revivo from '../components/img/Revivo/Revivo.png';

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="link-arrow">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: 'Digital i-D',
      course: 'Informatics Capstone Final Project',
      date: 'January 2026 – Present',
      descriptions: [
        'Co-led a 5-person team in designing a privacy-first tool that visualizes how much user data is collected while browsing online.',
        'Guided users through an interactive quiz and walkthrough, then generated a personalized report showing what information could be inferred from their browsing behavior, followed by a curated list of tools to help minimize data leakage and improve online privacy.',
      ],
      technologies: ['Privacy', 'Data Visualization', 'UX Design', 'React'],
      github: 'https://github.com/chuntr/datamirror',
    },
    {
      title: 'UW Study Hub',
      course: 'Client-side Development',
      date: 'January 2025 – March 2025',
      descriptions: [
        'Collaborated with a team of four to design a responsive platform that improves study efficiency for University of Washington students, making it easier to create, store, and review flashcards on any device.',
        'Developed and implemented a flashcard creation feature using HTML, CSS, JavaScript, and React, allowing students to generate and organize custom study sets to enhance their learning experience.',
      ],
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
      image: uwHubLogo,
      github: 'https://github.com/info340-wi25a/project-SantiagoG14',
    },
    {
      title: 'Revivo',
      course: 'Design Methods',
      date: 'January 2025 – March 2025',
      descriptions: [
        'Collaborated with a team of three to design a sustainability-focused app supporting the Right to Repair movement, using Figma to prototype features that help students reduce electronic waste.',
        'Conducted user interviews and usability testing to identify key repair-related pain points, iterating on designs based on student feedback to improve usability.',
      ],
      technologies: ['Figma', 'Usability Testing', 'User Research', 'Prototyping'],
      image: revivo,
      demo: 'https://www.figma.com/proto/0FlEqTnLaHVyFTnfLRvJ4r/Revivo?node-id=189-1318&p=f&t=SDFonaZgSGx7WEM8-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A35&starting-point-node-id=189%3A1318',
    },
    {
      title: 'GIS Analysis of Alcohol Outlet Density, Poverty, and Crash Rates',
      course: 'GIS and Mapping',
      date: 'March 2024 – June 2024',
      descriptions: [
        'GIS and spatial analysis coursework showcasing strong analytical skills through data processing, re-projection, and multi-layer mapping of alcohol outlet density, poverty, and alcohol-related crash rates in King County.',
        'Applied advanced spatial analysis techniques including intersection, dot density, and proportional symbol mapping to reveal meaningful correlations between socioeconomic factors and traffic safety outcomes.',
      ],
      technologies: ['QGIS', 'Spatial Analysis', 'Data Processing', 'Cartography'],
    },
  ];

  return (
    <div className="projects-content">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {project.image && (
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
          <div className="project-content">
            <div className="project-meta">
              <span className="project-course">{project.course}</span>
              <span className="project-date">{project.date}</span>
            </div>
            <h3>{project.title}</h3>
            {project.descriptions.map((desc, i) => (
              <p key={i} className="project-description">{desc}</p>
            ))}
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  GitHub <ArrowIcon />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  Live Demo <ArrowIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
