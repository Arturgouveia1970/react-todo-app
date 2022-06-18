import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <nav className="navBar">
      <ul>
        {Links.map(Link => {
          return (
            <li key={Link.id}>
              <Link to={Link.path}>{link.text}</Link>
            </li>  
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar;
