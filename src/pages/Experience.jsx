import React, { useState } from 'react';
import img2212 from '../components/img/SEARHC/IMG_2212.JPG';
import img2413 from '../components/img/SEARHC/IMG_2413.JPG';
import img2476 from '../components/img/SEARHC/IMG_2476.JPG';
import img2615 from '../components/img/SEARHC/IMG_2615.JPG';
import img2807 from '../components/img/SEARHC/IMG_2807.JPG';
import img2824 from '../components/img/SEARHC/IMG_2824.JPG';
import img2870 from '../components/img/SEARHC/IMG_2870.JPG';
import img2871 from '../components/img/SEARHC/IMG_2871.JPG';
import img2872 from '../components/img/SEARHC/IMG_2872.JPG';
import img2873 from '../components/img/SEARHC/IMG_2873.JPG';

const searhcPhotos = [
  img2212, img2413, img2476, img2615, img2807,
  img2824, img2870, img2871, img2872, img2873,
];

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [fullscreenPhoto, setFullscreenPhoto] = useState(null);

  const experiences = [
    {
      date: 'June 2025 – August 2025',
      title: 'Sealaska IT Intern',
      company: 'SEARHC · Southeast Alaska Regional Health Consortium, Juneau, AK',
      descriptions: [
        'Led a large-scale deployment and configuration of 50+ clinical computers in a remote Alaskan community, ensuring secure integration into healthcare environments and supporting new hire onboarding with personalized IT setups.',
        'Improved IT operations by automating system administration tasks and revitalizing the asset inventory system, enhancing equipment tracking and team efficiency.',
      ],
      technologies: ['IT Operations', 'PowerShell', 'Healthcare IT', 'Asset Management'],
      photos: searhcPhotos,
    },
    {
      date: 'March 2025 – December 2025',
      title: 'First-Year Interest Group Leader',
      company: 'First Year Programs · University of Washington, Seattle, WA',
      descriptions: [
        'Led and mentored a cohort of 25 first-year Informatics students, providing academic and professional guidance through weekly sessions.',
        'Designed and delivered an innovative curriculum with active learning strategies, improving student engagement and academic preparedness based on feedback.',
      ],
      technologies: ['Leadership', 'Mentorship', 'Curriculum Design', 'Student Engagement'],
    },
    {
      date: 'July 2022 – June 2025',
      title: 'Assistant Manager',
      company: "Shiga's Imports, Seattle, WA",
      descriptions: [
        'Led scheduling and workforce coordination for a team of 13 employees, ensuring efficient coverage for daily operations and major events while optimizing team productivity.',
        'Managed front shop displays and product research to support customer engagement and brand visibility, successfully leading the team to win first place in a local display contest for two consecutive years.',
      ],
      technologies: ['Team Leadership', 'Operations Management', 'Customer Service', 'Workforce Coordination'],
    },
  ];

  const openPhoto = (e, src) => {
    e.stopPropagation();
    setFullscreenPhoto(src);
  };

  return (
    <div className="experience-content">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-left">
            <div className="experience-date">{exp.date}</div>
            {exp.photos && (
              <button className="view-photos-btn" onClick={() => setShowModal(true)}>
                View Photos
              </button>
            )}
          </div>
          <div className="experience-details">
            <h3>{exp.title}</h3>
            <div className="experience-company">{exp.company}</div>
            {exp.descriptions.map((desc, i) => (
              <p key={i} className="experience-description">{desc}</p>
            ))}
            <div className="tech-stack">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}

      {showModal && (
        <div className="photo-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="photo-modal-grid" onClick={(e) => e.stopPropagation()}>
            {searhcPhotos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`SEARHC photo ${i + 1}`}
                className="photo-modal-item"
                onClick={(e) => openPhoto(e, src)}
              />
            ))}
          </div>
        </div>
      )}

      {fullscreenPhoto && (
        <div className="photo-fullscreen-overlay" onClick={() => setFullscreenPhoto(null)}>
          <img src={fullscreenPhoto} alt="Fullscreen" className="photo-fullscreen-img" />
        </div>
      )}
    </div>
  );
}
