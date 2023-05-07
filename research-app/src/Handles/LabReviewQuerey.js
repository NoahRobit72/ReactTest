import { collection, onSnapshot } from "firebase/firestore";
import { FSDB } from "../firebase_setup/firebase";

export function getLabReviews(id, setReviews) {
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
}
