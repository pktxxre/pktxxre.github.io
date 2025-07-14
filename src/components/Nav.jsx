import React from 'react';

export function AboutNav() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light border-bottom">
      <div className="container">
        <span className="navbar-brand">Alex Berry</span>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#" target="_blank" rel="noopener noreferrer">Resume</a>
          <a className="nav-link" href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="nav-link" href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </nav>
  );
}