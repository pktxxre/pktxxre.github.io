import React from 'react'; //import React Component
import { NavLink } from 'react-router';


export function AboutNav() {
  return (
    <nav id="aboutLinks">
      <h2>About</h2>
      <ul className="list-unstyled">
        <li>Home</li>
      </ul>
    </nav>
  );
}
<nav>
      <NavLink to="/" end>Home</NavLink>
</nav>