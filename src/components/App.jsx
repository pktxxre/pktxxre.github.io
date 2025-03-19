import React from 'react';
import { AboutNav } from './Nav';
import PetPage from './PetPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import Footer from './Footer'

function App(props) {
  return (
    <div>
      <AboutNav />
      <AboutPage />
      <PetPage />
      <SkillsPage />
      <Footer />
    </div>
  );
}

export default App;
