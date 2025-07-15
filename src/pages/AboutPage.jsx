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

export default function AboutPage() {
  return (
    <section id="about" className="mb-5">
      <h2 className="mb-4 border-bottom pb-2">About</h2>
      <div className="card p-4">
        {/* Add your bio or description here */}
      </div>
    </section>
  );
}