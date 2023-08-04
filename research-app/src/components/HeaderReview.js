import React from 'react';
import { Link } from "react-router-dom";
import plusLogo from "../static/plus.png";
import '../css/Header.css';

function HeaderReview({ labId, collegeName }) {
  return (
    <header>
      <Link className="site-logo" to="/">ResearchReviews.com</Link>
      <nav>
        {/* Pass labId and collegeName (selectedOption) as URL parameters */}
        <Link className="Linked-Block" to={`/add-review/${encodeURIComponent(labId)}/${encodeURIComponent(collegeName)}`}>
          <button className="addLab">
            <div className="buttonBox">
              <img src={plusLogo} alt="BigCo Inc. logo" />
              <p className="request">Add a Review </p>
            </div>
          </button>
        </Link>
        
      </nav>
    </header>
  );
}

export default HeaderReview;