import React from 'react';

export default function Skills() {
  const sections = [
    {
      heading: 'Skills',
      items: [
        'Data analysis and visualization using Tableau and QGIS',
        'Programming languages including Java, R, HTML, CSS, JavaScript, and SQL',
        'Geographic information systems and mapping',
        'Project management and team collaboration',
        'Front-end development with React',
        'System administration and automation through PowerShell',
        'IT support and troubleshooting in clinical settings',
        'Content creation and design thinking methodologies',
      ],
    },
    {
      heading: 'Industries',
      items: [
        'Healthcare IT',
        'Environmental research and sustainability',
        'Software development',
        'Academia and student technology support',
      ],
    },
    {
      heading: 'Industry Expertise',
      items: [
        'Environmental data analysis and carbon footprint research',
        'Usability testing and user experience design',
        'Remote technical deployment and support',
        'IT asset management and operational efficiency',
      ],
    },
    {
      heading: 'Technologies',
      items: ['Visual Studio Code', 'GitHub', 'Figma', 'Tableau', 'QGIS'],
    },
    {
      heading: 'Certifications',
      items: [
        'LinkedIn Learning — Content creation strategy and tools',
        'LinkedIn Learning — Design thinking: understanding the process',
      ],
    },
  ];

  return (
    <div className="skills-content">
      {sections.map((section, index) => (
        <div key={index} className="skill-section">
          <h3 className="skill-section-heading">{section.heading}</h3>
          <div className="skill-list">
            {section.items.map((item, i) => (
              <span key={i} className="skill-item">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
