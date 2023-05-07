import { addDoc, collection, doc, getDocs, setDoc } from "@firebase/firestore";
import { FSDB } from "../firebase_setup/firebase";

const handleSubmit = async (Review, college_name, Name, Position, Professor, Type, Rating) => {
  // Check if college_name is a valid string
  if (typeof college_name !== "string" || college_name.length === 0) {
    console.log("Invalid college name.");
    return;
  }

  // Check if lab_name is a valid string
  if (typeof Name !== "string" || Name.length === 0) {
    console.log("Invalid lab name.");
    return;
  }

  // Check if the collection exists
  const querySnapshot = await getDocs(collection(FSDB, college_name));
  if (querySnapshot.size === 0) {
    // Collection doesn't exist, create a new one
    const labDocRef = doc(FSDB, college_name, Name);
    await setDoc(labDocRef, { Name, Position, Professor });
    
    // Create Reviews subcollection within the new lab document
    const reviewsColRef = collection(labDocRef, "Reviews");
    
    // Add a new document to the Reviews subcollection for the new review
    await addDoc(reviewsColRef, { Review, Type, Rating });
  } else {
    // Collection exists, add a new document to it
    const labDocRef = doc(collection(FSDB, college_name), Name);
    await setDoc(labDocRef, { Name, Position, Professor });
    
    // Create Reviews subcollection within the existing lab document
    const reviewsColRef = collection(labDocRef, "Reviews");
    
    // Add a new document to the Reviews subcollection for the new review
    await addDoc(reviewsColRef, { Review, Type, Rating });
  }
};

export default handleSubmit;
