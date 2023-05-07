import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderSchool from "../../components/HeaderSchool";
import "../../css/LabReviews.css";
import { getLabReviews } from "../../Handles/LabReviewQuerey";
import ReviewTemplate from "./ReviewTemplate";



//still needed a little bit of code here to display the data
function LabReviews() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const unsubscribe = getLabReviews(id, setReviews);
    return unsubscribe;
  }, [setReviews,id]);

  const reviewElements = reviews.map((review) => {
    let badgeColor;
    if (review.Rating >= 0 && review.Rating < 2) {
      badgeColor = "DarkRed";
    } else if (review.Rating >= 2 && review.Rating < 3) {
      badgeColor = "Gold";
    } else if (review.Rating >= 3) {
      badgeColor = "DarkGreen";
    }
    return (
      <div className="reviews-tile" key={review.id}>
        <ReviewTemplate 
          position={review.Position}
          rating={review.Rating}
          comment={review.Review}
          badgeColor={badgeColor}
        />
      </div>
    );
  });

  return (
    <div>
      <HeaderSchool />
      <h1 className="LabHeader">{id}</h1>
      {reviewElements}
    </div>
  );
}

export default LabReviews;