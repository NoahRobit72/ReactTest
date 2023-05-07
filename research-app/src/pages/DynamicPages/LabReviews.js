import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderSchool from "../../components/HeaderSchool";
import "../../css/LabReviews.css";
import { getLabReviews } from "../../Handles/LabReviewQuerey";


//still needed a little bit of code here to display the data
function LabReviews() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const unsubscribe = getLabReviews(id, setReviews);
    return unsubscribe;
  }, [id]);



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
      <h1 className="LabHeader">{id}</h1>
      {reviewElements}
    </div>
  );
}

export default LabReviews;