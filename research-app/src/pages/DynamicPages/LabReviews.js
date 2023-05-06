import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FSDB } from "../../firebase_setup/firebase";
import HeaderSchool from "../../components/HeaderSchool";
import "../../css/LabReviews.css";


function LabReviews() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviewRef = collection(FSDB, "boston university", id, "Reviews");

    const unsubscribe = onSnapshot(reviewRef, (querySnapshot) => {
      const reviews = [];
      querySnapshot.forEach((doc) => {
        const { Position, Rating, Review } = doc.data();
        reviews.push({ id: doc.id, Position, Rating, Review });
      });
      setReviews(reviews);
    });

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
