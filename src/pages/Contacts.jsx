import React from 'react';

export default function Contact() {
  return (
    <div className="contact-content">
      <p>
        I'm always interested in new opportunities and collaborations. Whether you're
        looking for a developer to join your team, have a project in mind, or just want
        to say hello, I'd love to hear from you.
      </p>
      <p>
        Currently, I'm open to frontend development roles, freelance projects, and
        consulting opportunities. I'm particularly interested in working with modern
        React applications, design systems, and accessibility-focused projects.
      </p>
      <a href="mailto:alexcb@tutanota.com" className="contact-button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        Get In Touch
      </a>
    </div>
  );
}
