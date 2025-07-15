import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: [
        "React", "Next.js", "Vue.js", "TypeScript", "JavaScript (ES6+)", 
        "HTML5", "CSS3", "Sass/SCSS", "Tailwind CSS", "Bootstrap"
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        "Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", 
        "MySQL", "Redis", "GraphQL", "REST APIs", "Socket.io"
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "Netlify", "Heroku", 
        "Webpack", "Vite", "Jest", "Cypress", "Figma", "Adobe Creative Suite"
      ]
    },
    {
      category: "Methodologies",
      skills: [
        "Agile/Scrum", "Test-Driven Development", "Responsive Design", 
        "Accessibility (WCAG)", "Performance Optimization", "SEO", 
        "CI/CD", "Code Reviews"
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