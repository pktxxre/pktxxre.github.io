/*
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
  */
import React from 'react';

export default function SideBar({ activeId, setActiveId }) {
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
          <a 
            href="#about" 
            className={`nav-link ${activeId === 'about' ? 'active' : ''}` }
            onClick={() => setActiveId('about')}
          >
            <span className="nav-indicator"></span>
            <span className="nav-text">About</span>
          </a>
          <a 
            href="#experience" 
            className={`nav-link ${activeId === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveId('experience')}
          >
            <span className="nav-indicator"></span>
            <span className="nav-text">Experience</span>
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeId === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveId('projects')}
          >
            <span className="nav-indicator"></span>
            <span className="nav-text">Projects</span>
          </a>
          <a 
            href="#skills" 
            className={`nav-link ${activeId === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveId('skills')}
          >
            <span className="nav-indicator"></span>
            <span className="nav-text">Skills</span>
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeId === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveId('contact')}
          >
            <span className="nav-indicator"></span>
            <span className="nav-text">Contact</span>
          </a>
        </nav>

        <div className="sidebar-social">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="mailto:alex@example.com" 
            className="social-link"
          >
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}