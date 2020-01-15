import React from 'react';
import { NavButton } from '.';
import { withRouter } from 'react-router-dom';

const navData = [
  { path: '/', caption: 'Accueil' },
  { path: '/about', caption: 'A propos' },
  { path: '/books', caption: 'Oeuvres' },
];

const generateButtons = (data, activeRoute) =>
  data.map( (navItem, index) =>
    <NavButton key={`navButton${index}`} path={navItem.path} active={navItem.path === activeRoute}>
      {navItem.caption}
    </NavButton>
  );
;

const NavBar = ({ location }) =>
  <nav>
    <ul>
      {generateButtons(navData, location.pathname)}
    </ul>
  </nav>
;

export default withRouter(NavBar);
