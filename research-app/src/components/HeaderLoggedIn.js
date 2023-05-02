import React from 'react';
import { Link } from "react-router-dom"

import '../css/Header.css';

function HeaderLoggedIn(props) {
  return (
    <header>
    <Link className="site-logo" to="/">ResearchReviews.com</Link>
    <p className='insertName'>Hi {props.name} </p>
    <Link to="/login">Login</Link>
  </header>
  );
}

export default HeaderLoggedIn;