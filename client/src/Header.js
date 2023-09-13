import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
          <Link to="/" style={{ color: 'blue' }}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
