import React from 'react';
import { Link } from "react-router-dom"

import '../css/Header.css';

function HeaderSchool() {
  return (
    <header>
    <Link className="site-logo" to="/">ResearchReviews.com</Link>
  </header>
  );
}

export default HeaderSchool;