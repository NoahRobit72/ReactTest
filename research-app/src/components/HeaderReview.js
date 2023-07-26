import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import plusLogo from "../static/plus.png";
import '../css/Header.css';
import { collection, getDocs } from "firebase/firestore";
import { FSDB } from "../firebase_setup/firebase";

function HeaderReview({ labId, collegeName }) {
  const [reviewsCount, setReviewsCount] = useState(0);

  useEffect(() => {
    const fetchReviewsCount = async () => {
      try {
        // Fetch reviews collection for the specific lab
        const labRef = collection(FSDB, "Universities", collegeName, "Labs", labId, "Reviews");
        const querySnapshot = await getDocs(labRef);

        // Set the reviews count
        setReviewsCount(querySnapshot.size);
      } catch (error) {
        console.error("Error fetching reviews: ", error);
      }
    };

    fetchReviewsCount();
  }, [collegeName, labId]);

  return (
    <header>
      <Link className="site-logo" to="/">ResearchReviews.com</Link>
      <nav>
        {/* Pass labId and collegeName (selectedOption) as URL parameters */}
        <Link className="Linked-Block" to={`/add-review/${encodeURIComponent(labId)}/${encodeURIComponent(collegeName)}`}>
          <button className="addLab">
            <div className="buttonBox">
              <img src={plusLogo} alt="BigCo Inc. logo" />
              <p className="request">
                {reviewsCount === 0 ? "Add the first Review!" : "Add a Review"}
              </p>
            </div>
          </button>
        </Link>
      </nav>
    </header>
  );
}

export default HeaderReview;
