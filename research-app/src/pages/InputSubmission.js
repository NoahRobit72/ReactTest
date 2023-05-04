import React from "react"
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import "../css/InputSubmission.css"




export function InputSubmission() {

    const [formData, setFormData] = useState({
        firstName: "",
        position: "",
        lab: "",
        comment: "",
        college: "",
        rating: null,
    })
    
    const navigate = useNavigate(false);
    const params = useParams()

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
        console.log(formData.rating)

        const formDataValues = Object.values(formData);
        if (formDataValues.every((value) => value !== "" || value !== null)) {
            //firebase send data
            // go home
            console.log(params.id)
            var sendString = "/" + params.id
            navigate(sendString);
        } else {
            
        }

    }

    return (
    <div> 
        <h2>Input Review</h2>
    <div className="formLogin">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First name - Hidden"
                onChange = {handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Position"
                onChange = {handleChange}
                name="position"
                value={formData.position}
            />
            <input
                type="text"
                placeholder="Lab"
                onChange = {handleChange}
                name="lab"
                value={formData.lab}
            />
            <input
                type="text"
                placeholder="College"
                onChange = {handleChange}
                name="college"
                value={formData.college}
            />
            <textarea
                className="Comment"
                type="text"
                placeholder="Comment"
                onChange = {handleChange}
                name="comment"
                value={formData.comment}
            />
            <p>Rate your Research Program:</p>
            <Rating
                className = "stars"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                size="large"            
            />
            <br></br>
            <button>Submit</button>
        </form>
    </div>
    </div>
    )
}