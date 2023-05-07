import React from "react";
import { useParams } from "react-router-dom";

// import "../../css/LabReviews.css";
import ReviewTemplate from "./ReviewTemplate";

function LabReviewsTest() {

  const { id } = useParams();

    const reviews = [
        { position: 'Lab A', rating: 6, comment: 'not good'},
        { position: 'Lab B', rating: 8, comment: 'alright' },
        { position: 'Lab C', rating: 9, comment: 'mid' },
      ];

  const reviewElements = reviews.map((review) => (
    <div className="reviews-tile" key={review.id}>
      <ReviewTemplate 
        position = {review.position}
        rating = {review.rating}
        comment = {review.comment}
        />
    </div>
  ));

  return (
    <div>
      <h1 className="LabHeader">{id}</h1>
      {reviewElements}
    </div>
  );
}

export default LabReviewsTest;
