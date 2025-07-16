/* import React from 'react';

export default function PetPage(props) {
  return (
    <div className='transitionBG'>
      {/* <div className='tbgCard'>
        <a>Testing!</a>
      </div>
      <div className='p-5 m-5'>
        <a>Testing!</a>
      </div>
      <div className='tbgCard'>
        <a>Testing!</a>
      </div> }
    </div>    
  )
}
 */
/*
import React from 'react';

function ProjectCard({ title, description, technologies }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <div className="mt-3">
            {technologies.map((tech, index) => (
              <span key={index} className="badge bg-primary me-1 mb-1">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  // Sample projects - replace with your actual projects
  const projects = [
    {
      title: "Project One",
      description: "Description of your first project. What it does and what you learned.",
      technologies: ["React", "JavaScript", "Bootstrap"]
    },
    {
      title: "Project Two",
      description: "Description of your second project. Highlight your contributions.",
      technologies: ["Java", "Spring Boot"]
    },
    {
      title: "Project Three",
      description: "Description of your third project. Talk about challenges and solutions.",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];
  
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

*/
import React from 'react';

export default function Experience() {
  const experiences = [
    {
      date: "January 2025 - March 2025",
      title: "UW Study Hub",
      company: "Client-side Development",
      description: "Collaborated with a team of four to design a responsive platform that improves study efficiency for University of Washington students, making it easier to create, store, and review flashcards on any device.",
      technologies: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      date: "January 2025 - March 2025",
      title: "Revivo",
      company: "Design Methods",
      description: "Collaborated with a team of three to design a sustainability-focused app supporting the Right to Repair movement, using Figma to prototype features that help students reduce electronic waste.",
      technologies: ["Figma", "Usability testing", "User testing", "User research", "Prototyping"]
    },
    {
      date: "2019 — 2020",
      title: "Frontend Intern",
      company: "Creative Studio",
      description: "Assisted in the development of marketing websites and landing pages. Gained experience with modern development tools and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "Git"]
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
    </div>
  );
}