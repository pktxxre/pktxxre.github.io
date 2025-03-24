import React from 'react';
import AlexImage from '../components/img/Alex.jpeg'

export default function AboutPage() {
  return (
    <section>
      <div className='row align-items-start'>
        <div className='left col container my-5 mx-4'>

        </div>
        <div className='col-3 container m-5'>
          <div className=''>
            <img src={AlexImage} />
          </div>
          <div className=''>
            <a>My name is Alex Berry</a>
          </div>
        </div>
      </div>
      
    </section>
  );
}