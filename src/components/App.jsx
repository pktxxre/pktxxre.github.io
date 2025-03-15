import React from 'react';
import { AboutNav } from './Nav';
import PetPage from './PetPage';
import AboutPage from './AboutPage';

function App(props) {
  return (
    <div>
      <header className="jumbotron py-4 mb-4">
        <div className="container">
          <h1>
            Alex Berry
          </h1>
        </div>
      </header>
      <AboutNav />
      <AboutPage />
      <PetPage />
    </div>
  );
}

export default App;
