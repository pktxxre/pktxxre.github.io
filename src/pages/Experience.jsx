import React from 'react';

export default function Experience() {
  const experiences = [
    {
      date: "June 2025 - August 2025",
      title: "Information Technology Support Specialist Intern",
      company: "SouthEast Alaska Regional Health Consortium (SEARHC)",
      description: "Collaborated with a team of four to design a responsive platform that improves study efficiency for University of Washington students, making it easier to create, store, and review flashcards on any device.",
      technologies: ["IT Operations", "Powershell", "Customer Support"]
    },
    {
      date: "October 2024 - September 2025",
      title: "Sustainable Business Researcher",
      company: "ReThink @ University of Washington",
      description: "Wrote business spotlights for our RSO website, highlighting local Seattle businesses with strong sustainability practices and encouraging student engagement and support.",
      technologies: ["Research & Analysis", "Content Creation", "Communication", "Sustainability Knowledge"]
    }
  ];

  return (
    <div className="experience-content">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-date">{exp.date}</div>
          <div className="experience-content">
            <h3>{exp.title}</h3>
            <div className="experience-company">{exp.company}</div>
            <p className="experience-description">{exp.description}</p>
            <div className="tech-stack">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      {/* Resume button */}
      <div className="resume-button-container">
        <a 
          href="/path-to-your-resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-button"
        >
          <span className="resume-text">View Full Résumé</span>
          <svg className="resume-arrow" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </div>
    </div>
  );
}