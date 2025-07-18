import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Technical Skills",
      skills: [
        "Python", "Java", "Powershell", "Quantum GIS", "R",
        "React", "JavaScript", "HTML", "CSS", "Bootstrap",
        "IT Operations", "Git", "Figma", "Canva"
      ]
    },
    {
      category: "Communication & Collaboration",
      skills: [
        "Communication", "Team Leadership", "Goal orientation", "Public-facing communication",
        "Educational communication", "Community engagement", "Student engagement"
      ]
    },
    {
      category: "Strategic & Instructional Skills",
      skills: [
        "Trend analysis", "Content creation",
        "Visual storytelling", "Values driven", "Community engagement", 
        "Ethical awareness", "Instructional design"
      ]
    }
  ];

  return (
    <div className="skills-content">
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}