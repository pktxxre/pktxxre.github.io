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

export default function Contacts() {
  return (
    <section id="contact" className="mb-5">
      <h2 className="mb-4 border-bottom pb-2">Contact</h2>
      <div className="card p-4">
        {/* Add your contact form or details here */}
      </div>
    </section>
  );
}
