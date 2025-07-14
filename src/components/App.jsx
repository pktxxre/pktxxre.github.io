/*import React from 'react';
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
*/
import React from 'react';
// import { AboutNav } from './Nav';
// import AboutPage from './AboutPage';
// import PetPage from './PetPage'; // Renamed from PetPage
// import SkillsPage from './SkillsPage';
// import Footer from './Footer';

import Sidebar from './SideBar';
import About from '../pages/AboutPage';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contacts';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-1/3 w-2/3 overflow-y-auto h-screen px-8 py-12 space-y-24">
        <AboutPage />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AboutNav />
      <main className="flex-grow-1">
        <AboutPage />
        <PetPage />
        <SkillsPage />
      </main>
      <Footer />
    </div>
  );
} */