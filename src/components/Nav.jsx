import React from 'react'; //import React Component
import { NavLink } from 'react-router';


export function AboutNav() {
  return (
    <nav className='nav p-3 d-flex flex-row-reverse border-bottom'>
      <a className='nav-link' href='#'>LinkedIn</a>
      <a className='nav-link' href='#'>Github</a>
      <a className='nav-link' href='#'>Resume</a>
    </nav>
  );
}