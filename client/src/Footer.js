import React from 'react';
import './Header.css';

const Footer = () => {
  return (
    <footer>
      <p> 
        © {new Date().getFullYear()} Rahul |{' '}
        <a href="https://github.com/Rahul-R-1796/MERN_CRUD" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
