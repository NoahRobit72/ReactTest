import React from "react"
import "../../css/LoginPage.css"
import { useState } from 'react';


// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDnvTbZTBGEP0D40K0ohmqDQsFVP3Iy-lU",
//     authDomain: "ratingsreview-f04f9.firebaseapp.com",
//     projectId: "ratingsreview-f04f9",
//     storageBucket: "ratingsreview-f04f9.appspot.com",
//     messagingSenderId: "984944313406",
//     appId: "1:984944313406:web:52a529d0d3b00c3e18bd6f",
//     measurementId: "G-0QPK4X29BL"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth();



export function LoginPage() {

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        password: "",
        password2: "",
    })

    const [showError, setShowError] = useState(false); // initialize state for error message

    
    // Parse the inputs and same them to variables 
    function handleChange(event) {
        const{name,value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]:value
        }))
    }

    // On submit send this value to the firebase login 
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.password2){
            console.log("user submitted")
            setShowError(false);

        }
        else{
            console.log("user not submitted")   
            setShowError(true);
        }
    }

    return (
    <div className="formLogin">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First name"
                onChange = {handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Email"
                onChange = {handleChange}
                name="email"
                value={formData.email}
            />
            <input
                type="password"
                placeholder="Password"
                onChange = {handleChange}
                name="password"
                value={formData.password}
            />
            <input
                type="password"
                placeholder="Confirm password"
                onChange = {handleChange}
                name="password2"
                value={formData.password2}
            />
            {showError && <p>Passwords do not match. Please try again.</p>}
            <button>Submit</button>
            
        </form>
    </div>
    )
}