import React from "react"
import "../../css/LoginPage.css"
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";



export function LoginPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate(false);


    
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
        var sendString = "/" + formData.name
        navigate(sendString);   
    }

    return (
    <div> 
        <h2>Login</h2>
    <div className="formLogin" id="loginpage">
        <form onSubmit={handleSubmit}>
        <input
                type="text"
                placeholder="Name - do be deleted"
                onChange = {handleChange}
                name="name"
                value={formData.name}
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
            <button>Sign in</button>
            <br></br>
            <Link className="signUp" to="/signup">Not yet registered? Sign up</Link>
        </form>
    </div>
    </div>
    )
}