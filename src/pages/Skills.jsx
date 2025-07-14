import React from 'react';

function SkillCard({ skillName }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 text-center">
      <h3 className="text-lg font-medium">{skillName}</h3>
    </div>
  );
}

export default function Skills() {
  const technicalSkills = ['Java', 'R', 'HTML', 'JavaScript', 'CSS'];
  const languageSkills = ['Korean', 'Japanese', 'English'];

  return (
    <section id="skills">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl mb-4 underline">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={`tech-${index}`} skillName={skill} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl mb-4 underline">Language Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {languageSkills.map((skill, index) => (
              <SkillCard key={`lang-${index}`} skillName={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}