/*
import React from 'react';
import AlexImage from '../components/img/Alex.jpeg';

export default function AboutPage() {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h1 className="mb-4">About Me</h1>
          <p className="lead">
            
            I'm a developer with skills in multiple programming languages and natural languages.
          </p>
          
        </div>
        <div className="col-md-4 text-center">
          <img 
            src={AlexImage} 
            alt="Alex Berry" 
            className="img-fluid rounded-circle mb-3" 
            style={{ maxWidth: '200px' }} 
          />
          <h2>Alex Berry</h2>
        </div>
      </div>
    </section>
  );
}
  */

import React from 'react';

export default function About() {
  return (
    <div className="about-content">
      <p>
        I'm a developer passionate about crafting accessible, pixel-perfect user interfaces 
        that blend thoughtful design with robust engineering. My favorite work lies at the 
        intersection of design and development, creating experiences that not only look great 
        but are meticulously built for performance and usability.
      </p>
      
      <p>
        Currently, I'm a <strong>Frontend Developer</strong> specializing in React and modern 
        web technologies. I contribute to building scalable web applications and design systems 
        that prioritize user experience and accessibility standards.
      </p>
      
      <p>
        In the past, I've had the opportunity to develop software across a variety of settings — 
        from startups to established companies, working on everything from e-commerce platforms 
        to internal tools and consumer applications.
      </p>
      
      <p>
        In my spare time, I enjoy exploring new technologies, contributing to open source projects, 
        and staying up-to-date with the latest developments in web development and design.
      </p>
    </div>
  );
}