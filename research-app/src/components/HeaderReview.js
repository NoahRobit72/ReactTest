// HeaderReview.js

import React from 'react';
import { Link } from "react-router-dom";
import plusLogo from "../static/plus.png";
import '../css/Header.css';

// HeaderReview.js
// ... (existing code)

function HeaderReview({ labId }) {
  return (
    <header>
      <Link className="site-logo" to="/">ResearchReviews.com</Link>
      <nav>
        <Link className="Linked-Block" to={`/add-review/${encodeURIComponent(labId)}`}>
          <button className="addLab">
            <div className="buttonBox">
              <img src={plusLogo} alt="BigCo Inc. logo" />
              <p className="request">Add a Review</p>
            </div>
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default HeaderReview;

