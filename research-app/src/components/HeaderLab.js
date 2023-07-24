import React from 'react';
import { Link } from "react-router-dom"
import plusLogo from "../static/plus.png"
import '../css/Header.css';

function HeaderLab() {
  return (
    <header>
    <Link className="site-logo" to="/">ResearchReviews.com</Link>
    <nav>
      {/* <Link to="/login">Login</Link> */}
      <button className="addLab">
        <div className="buttonBox">
          <img src={plusLogo} alt="BigCo Inc. logo"/>
          <p className="request">Add a Review</p>
        </div>
      </button>
    </nav>
  </header>
  );
}

export default HeaderLab;