// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUatL6KJSFJXjUojNuuY7q-KG893bC9sg",
  authDomain: "research-website-c2dd8.firebaseapp.com",
  databaseURL: "https://research-website-c2dd8-default-rtdb.firebaseio.com",
  projectId: "research-website-c2dd8",
  storageBucket: "research-website-c2dd8.appspot.com",
  messagingSenderId: "301008355090",
  appId: "1:301008355090:web:2dd3e2e626716fbbe4fdcb",
  measurementId: "G-467Q17C4H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FSDB = getFirestore(app)
export const auth = getAuth(app);
const db = getFirestore(app);


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

// Function to add a user to the realtime database
// export function writeUserData(name, email) {
//   const userId = makeid(10) 
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//   });
// }

// Login Function
export async function signUpUser(name,email,password){
  // reatime database signup
  const userId = makeid(10) 
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  });

  // email signup
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    console.log(error.message);
  }
};



