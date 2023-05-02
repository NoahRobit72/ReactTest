
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW1O1zmmGfvR78a937yHxKcCCnWnIFH40",
  authDomain: "research-app-725fc.firebaseapp.com",
  projectId: "research-app-725fc",
  storageBucket: "research-app-725fc.appspot.com",
  messagingSenderId: "1010138552816",
  appId: "1:1010138552816:web:bb8f675705d363bcf2a535",
  measurementId: "G-N9B6SCR53E"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);