import React from 'react';
import { AboutNav } from './Nav';
import PetPage from './PetPage';
import AboutPage from './AboutPage';

function App(props) {
  return (
    <div>
      <AboutNav />
      <div className='p-5' />
      <div className='p-5' />
      <AboutPage />
      <PetPage />
    </div>
  );
}

export default App;
