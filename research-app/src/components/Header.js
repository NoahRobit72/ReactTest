import React from 'react';
import { Link } from "react-router-dom"

import '../css/Header.css';

function Header() {
  return (
    <header>
    <Link className="site-logo" to="/">ResearchReviews.com</Link>
    <nav>
      <Link to="/login">Login</Link>
    </nav>
  </header>
  );
}

export default Header;