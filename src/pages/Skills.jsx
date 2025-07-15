import React from 'react';

function SkillCard({ skillName }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body text-center">
        <h3>{skillName}</h3>
      </div>
    </div>
  );
}

export default function Skills() {
  const technicalSkills = ['Java', 'R', 'HTML', 'JavaScript', 'CSS'];
  const languageSkills = ['Korean', 'Japanese', 'English'];

  return (
    <section id="skills" className="mb-5">
      <h2 className="mb-4 border-bottom pb-2">Skills</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3 className="text-decoration-underline text-center mb-3">Technical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <SkillCard key={`tech-${index}`} skillName={skill} />
          ))}
        </div>
        <div className="col-md-6 mb-4">
          <h3 className="text-decoration-underline text-center mb-3">Language Skills</h3>
          {languageSkills.map((skill, index) => (
            <SkillCard key={`lang-${index}`} skillName={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}