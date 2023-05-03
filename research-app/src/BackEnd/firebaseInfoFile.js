
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUatL6KJSFJXjUojNuuY7q-KG893bC9sg",
  authDomain: "research-website-c2dd8.firebaseapp.com",
  databaseURL: "https://research-website-c2dd8-default-rtdb.firebaseio.com",
  projectId: "research-website-c2dd8",
  storageBucket: "research-website-c2dd8.appspot.com",
  messagingSenderId: "301008355090",
  appId: "1:301008355090:web:4ab1876a45f45aa4e4fdcb",
  measurementId: "G-696JG0KGTV"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);