import React from 'react';
import AlexImage from '../components/img/Alex.jpeg'

export default function AboutPage() {
  return (
    <div className='container'>
      <div className='cards'>
        <img src={AlexImage} />
      </div>
      <div className='cards'>
        <a>My name is Alex Berry</a>
      </div>
    </div>
  );
}