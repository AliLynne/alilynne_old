import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header className="Header">
      <h1>Ali Lynne Thompson</h1>
      <p>Contact Me: <a href="mailto:alilynne.thompson@gmail.com">alilynne.thompson@gmail.com</a></p>
      <a href="https://github.com/AliLynne/">GitHub</a>
      <ul className="Header__List">
        <li className="Header__ListItem">
          <Link to="/blog/">Blog</Link>
          <Link to="/projects/">Projects</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;