/* import React from 'react';

export default function SkillsPage(props) {
    return (
        <section>
            <div className='container my-5'>
                <div className='wrap'>
                    <div className='d-flex flex-row justify-content-around'>
                        <div className=''>
                            <h2 className='text-decoration-underline'>Technical Skills</h2>
                            <div className='cards'>
                                <h3>Java</h3>
                            </div>
                            <div className='cards'>
                                <h3>R</h3>
                            </div>
                            <div className='cards'>
                                <h3>HTML</h3>
                            </div>
                            <div className='cards'>
                                <h3>JavaScript</h3>
                            </div>
                            <div className='cards'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='text-decoration-underline'>Language Skills</h2>
                            <div className='cards'>
                                <h3>Korean</h3>
                            </div>
                            <div className='cards'>
                                <h3>Japanese</h3>
                            </div>
                            <div className='cards'>
                                <h3>English</h3>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
} */
/*
import React from 'react';

// Creating reusable skill card component
function SkillCard({ skillName }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body text-center">
        <h3>{skillName}</h3>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const technicalSkills = ['Java', 'R', 'HTML', 'JavaScript', 'CSS'];
  const languageSkills = ['Korean', 'Japanese', 'English'];
  
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h2 className="text-center mb-4 text-decoration-underline">Technical Skills</h2>
            {technicalSkills.map((skill, index) => (
              <SkillCard key={`tech-${index}`} skillName={skill} />
            ))}
          </div>
          <div className="col-md-6 mb-4">
            <h2 className="text-center mb-4 text-decoration-underline">Language Skills</h2>
            {languageSkills.map((skill, index) => (
              <SkillCard key={`lang-${index}`} skillName={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  */
import React from 'react';

export default function Contact() {
  return (
    <div className="contact-content">
      <p>
        I'm always interested in new opportunities and collaborations. Whether you're 
        looking for a developer to join your team, have a project in mind, or just want 
        to say hello, I'd love to hear from you.
      </p>
      
      <p>
        Currently, I'm open to frontend development roles, freelance projects, and 
        consulting opportunities. I'm particularly interested in working with modern 
        React applications, design systems, and accessibility-focused projects.
      </p>

      <a 
        href="mailto:alex@example.com" 
        className="contact-button"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        Get In Touch
      </a>
    </div>
  );
}
