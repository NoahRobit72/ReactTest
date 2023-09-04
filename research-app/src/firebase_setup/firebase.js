// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDatabase, ref, set} from "firebase/database";
import { collection } from 'firebase/firestore';
import { query, onSnapshot } from "firebase/firestore";
import { firebaseConfig } from "./configInfo.js";
// import { db } from './firebase'; // Assuming you have already initialized the Firebase app and have access to the Firestore database instance


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FSDB = getFirestore(app)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();


// Function to make ID
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export async function addReview(school, lab, review, position, rating) {
  const reviewID = makeid(10) 
  const messageRef = doc(db, school, lab, "Reviews", reviewID);
  try {
    const docData = {
      Review: review,
      Position: position,
      Rating: rating
    };
    await setDoc(messageRef, docData);
    console.log("Review added successfully!");
  } catch (error) {
    console.error("Error adding review: ", error);
  }
}


// Login Function
export async function signUpUser(name,email,password){
  // reatime database signup
  const userId = makeid(10) 
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  });

}

export const subscribeToLabUpdates = (collegeName, setLabs) => {
  const q = query(collection(db, collegeName));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const labs = [];
    querySnapshot.forEach((doc) => {
      labs.push({ id: doc.id, ...doc.data() });
    });
    setLabs(labs);
  });

  return unsubscribe; // Return the unsubscribe function
};




