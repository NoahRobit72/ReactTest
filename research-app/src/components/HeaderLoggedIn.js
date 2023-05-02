import React from 'react';
import { Link } from "react-router-dom"


import '../css/Header.css';

function HeaderLoggedIn(props) {
  return (
    <header>
    <Link className="site-logo" to="/">ResearchReviews.com</Link>
    <Link to="/ReviewInput">Write a Review!</Link>
    <p className='insertName'>Hi {props.name} </p>
    <Link to="/">Sign Out</Link>
  </header>
  );
}

export default HeaderLoggedIn;