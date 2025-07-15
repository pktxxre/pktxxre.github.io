import React from 'react';

export default function SideBar({ activeId }) {
  return (
    <div className="position-fixed top-0 start-0 vh-100 w-50 text-white d-flex flex-column justify-content-between">
      <div className="w-100 d-flex justify-content-center">
        <div className="p-4" style={{ maxWidth: '300px', width: '100%' }}>
          <h1 className="mb-2">Alex Berry</h1>
          <p className="text-secondary">Web Developer</p>
          <nav className="nav flex-column mt-4">
            <a href="#about" className={`nav-link nav-link-custom text-white ps-0 d-flex align-items-center group ${activeId === 'about' ? 'active' : ''}`}>
              <span className="nav-indicator me-4"></span>
              <span className="nav-text">About</span>
            </a>
            <a href="#experience" className={`nav-link nav-link-custom text-white ps-0 d-flex align-items-center group ${activeId === 'experience' ? 'active' : ''}`}>
              <span className="nav-indicator me-4"></span>
              <span className="nav-text">Experience</span>
            </a>
            <a href="#projects" className={`nav-link nav-link-custom text-white ps-0 d-flex align-items-center group ${activeId === 'projects' ? 'active' : ''}`}>
              <span className="nav-indicator me-4"></span>
              <span className="nav-text">Projects</span>
            </a>
            <a href="#skills" className={`nav-link nav-link-custom text-white ps-0 d-flex align-items-center group ${activeId === 'skills' ? 'active' : ''}`}>
              <span className="nav-indicator me-4"></span>
              <span className="nav-text">Skills</span>
            </a>
            <a href="#contact" className={`nav-link nav-link-custom text-white ps-0 d-flex align-items-center group ${activeId === 'contact' ? 'active' : ''}`}>
              <span className="nav-indicator me-4"></span>
              <span className="nav-text">Contact</span>
            </a>
          </nav>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <footer className="text-muted small p-4" style={{ maxWidth: '300px', width: '100%' }}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white me-3">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
        </footer>
      </div>
    </div>
  );
}