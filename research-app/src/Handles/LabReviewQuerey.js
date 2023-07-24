import { collection, doc, onSnapshot } from "firebase/firestore";
import { FSDB } from "../firebase_setup/firebase";

// Function to fetch lab reviews for a specific lab
export function getLabReviews(collegeName, labId, setReviews) {
  try {
    // Reference the lab document under the specified university
    const universityDocRef = doc(FSDB, "Universities", collegeName);
    const labDocRef = doc(universityDocRef, "Labs", labId);

    // Reference the "Reviews" subcollection under the lab document
    const reviewsCollectionRef = collection(labDocRef, "Reviews");

    // Subscribe to real-time updates from the "Reviews" subcollection
    const unsubscribe = onSnapshot(reviewsCollectionRef, (querySnapshot) => {
      const reviewsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReviews(reviewsData);
    });

    // Return the unsubscribe function to be called when the component unmounts
    return unsubscribe;
  } catch (error) {
    console.error("Error fetching lab reviews: ", error);
  }
}
