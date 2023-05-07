import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderSchool from "../../components/HeaderSchool";
import "../../css/LabReviews.css";
import { getLabReviews } from "../../Handles/LabReviewQuerey";

function LabReviews() {
  const { labId, collegeName } = useParams();
  const [reviews, setReviews] = useState([]);

  console.log(collegeName)

  useEffect(() => {
    const unsubscribe = getLabReviews(collegeName, labId, setReviews);
    return unsubscribe;
  }, [collegeName, labId]);

  const reviewElements = reviews.map((review) => (
    <div className="reviews-tile" key={review.id}>
      <p>Position: {review.Position}</p>
      <p>Rating: {review.Rating}</p>
      <p>Review: {review.Review}</p>
    </div>
  ));

  return (
    <div>
      <HeaderSchool />
      <h1 className="LabHeader">{labId}</h1>
      {reviewElements}
    </div>
  );
}

export default LabReviews;