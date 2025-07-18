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
      Hello! I'm a senior at the University of Washington studying Informatics, with a strong interest in building ethical, 
      human-centered technologies. I'm especially passionate about sustainable and responsible data use, how 
      we design systems that not only work well, but also respect users and the world around them.
      </p>
      
      <p>
      I am currently deepening my skills in frontend development, and exploring the intersection of law and technology, 
      with the goal of attending law school and contributing to AI governance through thoughtful, 
      forward-looking legislation that helps steer emerging technologies toward a more equitable future. 
      I love learning from others, tackling new challenges, and connecting with people 
      who care about the intersection of technology, ethics, and design.
      </p>
      
      <p>
      When I'm not coding, you'll find me reading, climbing, or diving into side projects to sharpen my programming skills. 
      Feel free to reach out—whether it's about a project, opportunity, or just a good book recommendation!
      </p>
      
      <p>
      </p>
    </div>
  );
}