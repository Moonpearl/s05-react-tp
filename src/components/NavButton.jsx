import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
  <Link to={props.path}>
    <li className={"NavButton" + (props.active ? ' active' : '')}>
      {props.children}
    </li>
  </Link>
;
