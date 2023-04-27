
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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
const database = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth();

function firebaseLogin(email,password,username){
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid), {
            username: username,
            email: email
        })
        alert('user created');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("errorMessage");
    });
}



