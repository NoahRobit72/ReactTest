import { collection, query, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FSDB } from "../../firebase_setup/firebase";
import HeaderSchool from "../../components/HeaderSchool";
import "../../css/LabReviews.css";

function LabReviews() {
 
  //const { labId } = useParams();
  const labId = "song lab"
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviewRef = collection(FSDB, "boston university", labId, "Reviews");

    const unsubscribe = onSnapshot(reviewRef, (querySnapshot) => {
      const reviews = [];
      querySnapshot.forEach((doc) => {
        reviews.push({ id: doc.id, ...doc.data() });
      });
      setReviews(reviews);
    });

    return unsubscribe;
  }, [labId]);

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
