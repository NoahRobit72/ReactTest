import React from 'react';
import { Link } from "react-router-dom"
import plusLogo from "../static/plus.png"

import '../css/Header.css';

function Header() {
  return (
    <header>
    <Link className="site-logo" to="/">ResearchReviews.com</Link>
    <nav>
      {/* <Link to="/login">Login</Link> */}
      <Link className="Linked-Block" to={`/SchoolSubmission`}>
      <button className="addLab">
        <div className="buttonBox">
          <img src={plusLogo} alt="BigCo Inc. logo"/>
          <p className="request">Add a School</p>
        </div>
      </button>
      </Link>
    </nav>
  </header>
  );
}

export default Header;

