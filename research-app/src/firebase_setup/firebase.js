// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
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
