import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnvTbZTBGEP0D40K0ohmqDQsFVP3Iy-lU",
    authDomain: "ratingsreview-f04f9.firebaseapp.com",
    projectId: "ratingsreview-f04f9",
    storageBucket: "ratingsreview-f04f9.appspot.com",
    messagingSenderId: "984944313406",
    appId: "1:984944313406:web:52a529d0d3b00c3e18bd6f",
    measurementId: "G-0QPK4X29BL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid), {
          username: username,
          email: email
        });
        alert('user created');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div id="login-box">
      <div className="left">
        <h1>Sign up</h1>
        <input type="text" id="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" id="signup" name="signup" value="signup" onClick={handleSignup} />
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      </div>
  );
}

export default Signup;
