import React from 'react';
import AlexImage from '../components/img/Alex.jpeg'

export default function AboutPage() {
  return (
    <section>
      <div className='container my-5'>
        <div className=''>
          <img src={AlexImage} />
        </div>
        <div className=''>
          <a>My name is Alex Berry</a>
        </div>
      </div>
    </section>
  );
}