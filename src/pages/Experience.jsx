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
  return (
    <section id="experience" className="mb-5">
      <h2 className="mb-4 border-bottom pb-2">Experience</h2>
      <div className="card p-4">
        {/* Add your job experiences here */}
      </div>
    </section>
  );
}