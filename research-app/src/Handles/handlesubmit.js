import { addDoc, collection, doc, getDocs, setDoc } from "@firebase/firestore";
import { FSDB } from "../firebase_setup/firebase";
import {LabExists} from "../Handles/labExists"

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

  //university collection does not exist
  const querySnapshot = await getDocs(collection(FSDB, college_name));
  if (querySnapshot.size === 0) {
    // Collection doesn't exist, create a new one for that university 
    const labDocRef = doc(FSDB, college_name, Name);
    
    //add the lab document to the university collection
    await setDoc(labDocRef, { Name, Position, Professor });
  
    // Create Reviews subcollection within the new lab document
    const parentDocumentRef = FSDB.collection(college_name).doc(Name);
    const reviewsCollectionRef = parentDocumentRef.collection("Reviews");
    
    // Add a new document to the Reviews subcollection for the new review
    await reviewsCollectionRef.add({ Review, Type, Rating });
  }
  
  // university Collection exists, add a new document to it
  else {
    //check if the lab exists or not if the lab does not exists add a new document and create a new Reviews sub collection 
    if (!LabExists(college_name, Name)) {
      //adding a new document to the university collection
      const labDocRef = doc(FSDB, college_name, Name);
      await setDoc(labDocRef, { Name, Position, Professor });
    // Create Reviews subcollection within the new lab document
      const parentDocumentRef = FSDB.collection(college_name).doc(Name)
      parentDocumentRef.collection('Reviews').add({
        // ...add data to the sub-collection here
        Review, 
        Type, 
        Rating 
        });

    } 
    else {
      // Create Reviews subcollection within the new lab document
      const parentDocumentRef = FSDB.collection(college_name).doc(Name)
      parentDocumentRef.collection('Reviews').add({
        // ...add data to the sub-collection here
        Review, 
        Type, 
        Rating 
        });
    }
    
  }
};

export default handleSubmit;


// Get a reference to the parent collection
//const parentCollectionRef = db.collection('parentCollection');

// Get a reference to the parent document
//const parentDocumentRef = parentCollectionRef.doc('parentDocument');

// Create a sub-collection within the parent document
//parentDocumentRef.collection('subCollection').add({
// ...add data to the sub-collection here
//})
