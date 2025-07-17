import React from 'react';

export default function SideBar({ activeId }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <header className="sidebar-header">
          <h1 className="name">Alex Berry</h1>
          <h2 className="title">Web Developer</h2>
          <p className="description">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
        </header>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeId === item.id ? 'active' : ''}`}
            >
              <span className="nav-indicator"></span>
              <span className="nav-text">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}