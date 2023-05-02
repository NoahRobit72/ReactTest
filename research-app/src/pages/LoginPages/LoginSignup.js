import React from "react"
import "../../css/LoginPage.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../BackEnd/firebaseInfoFile";



export function LoginSignup() {

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        password: "",
        password2: "",
    })

    const [showError, setShowError] = useState(false); // initialize state for error message
    const navigate = useNavigate(false);


    
    // Parse the inputs and same them to variables 
    function handleChange(event) {
        const{name,value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]:value
        }))
    }

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };
    
    // On submit send this value to the firebase login 
    function handleSubmit(event) {
        event.preventDefault()
        if((formData.password === formData.password2) && (formData.password !== "")){
            console.log("user submitted")
            setShowError(false);
            register();
            var sendString = "/" + formData.firstName
            navigate(sendString);
        }
        else{
            console.log("user not submitted")   
            setShowError(true);
        }
    }

    return (
    <div> 
        <h2>Sign Up</h2>
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
            <button>Sign up</button>
            {showError && <p>Passwords do not match. Please try again.</p>}
        </form>
    </div>
    </div>
    )
}