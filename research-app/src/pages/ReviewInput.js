import React from "react"
import { useState } from 'react';


export function ReviewInput() {

    const [formData, setFormData] = useState({
        firstName: "",
        title: "",
        lab: "",
        comment: "",
        rating: 0,
    })

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
                placeholder="Title"
                onChange = {handleChange}
                name="title"
                value={formData.title}
            />
            <input
                type="text"
                placeholder="Lab"
                onChange = {handleChange}
                name="lab"
                value={formData.lab}
            />
            <input
                className="Comment"
                type="text"
                placeholder="Comment"
                onChange = {handleChange}
                name="comment"
                value={formData.comment}
            />
            <input
                type="radio"
                placeholder="Rating"
                onChange = {handleChange}
                name="rating"
                value={formData.rating}
            />
            <button>Submit</button>
        </form>
    </div>
    </div>
    )
}