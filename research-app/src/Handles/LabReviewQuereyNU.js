import { collection, onSnapshot } from "firebase/firestore";
import { FSDB } from "../firebase_setup/firebase";

export function getLabReviewsNU(id, setReviews) {
  const reviewRef = collection(FSDB, "Northeastern", id, "Reviews");

  const unsubscribe = onSnapshot(reviewRef, (querySnapshot) => {
    const reviews = [];
    querySnapshot.forEach((doc) => {
      const { Position, Rating, Review } = doc.data();
      reviews.push({ id: doc.id, Position, Rating, Review });
    });
    setReviews(reviews);
  });

  return unsubscribe;
}
