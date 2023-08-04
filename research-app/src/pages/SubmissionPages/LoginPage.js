import React from "react"
import "../../css/LoginPage.css"
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase_setup/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";



export function LoginPage() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate(false);
    const [showError, setShowError] = useState(false); // initialize state for error message

    
    // Parse the inputs and save them to variables 
    function handleChange(event) {
        const{name,value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]:value
        }))
    }

    const login = async () => {
        try {
         const userCredential = await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );
          const user = userCredential.user;
          console.log(user);
          return { user };

        } catch (error) {
          console.log(error.message);
          return { error };
        }
      };

    // On submit send this value to the firebase login 
    async function handleSubmit(event) {
        event.preventDefault()
        const result = await login();

        if (result.user){
            navigate(`/?username=${result.user.email}`) //naviagtion to home page after successful login
            setShowError(false);
        }
        else {
            console.log(result.error.message);
            setShowError(true);
        }  
    }

    return (
    <div> 
        <h2>Login</h2>
    <div className="formLogin" id="loginpage">
        <form onSubmit={handleSubmit}>
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
            <button>Sign in</button>
            {showError && <p>User not found. Please try again.</p>}
            <br></br>
            <Link className="signUp" to="/signup">Not yet registered? Sign up</Link>
        </form>
    </div>
    </div>
    )
}