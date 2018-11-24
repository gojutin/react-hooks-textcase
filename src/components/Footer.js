import React from 'react';
import logo from '../logo.svg';
import github from '../github-logo.svg';

function Footer() {
  return (
    <footer>
      <h4>Built with React Hooks</h4>
      <img src={logo} className="App-logo" alt="logo" />
      <a href="https://github.com" rel="noopener noreferrer">
        <img src={github} className="github-logo" alt="logo" />
      </a>
    </footer>
  );
}

export default Footer;
