import React from "react";
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import "../../css/InputSubmission.css";
import handleSubmit from "../../Handles/handlesubmit.js";

export function InputSubmission() {

    const [formData, setFormData] = useState({
        firstName: "",
        Professor: "",
        position: "",
        lab: "",
        comment: "",
        college: "",
        rating: null,
    });
    
    const navigate = useNavigate(false);
    const params = useParams();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const { comment, college, lab, position, Professor } = formData;

        if (comment && college && lab && position && Professor) {
            handleSubmit(comment, college, lab, position, Professor);
            console.log("I just tried to post to the Firestore");

            const sendString = `/${params.id}`;
            navigate(sendString);
        } else {
            console.log("Error: all fields are required");
        }
    }

    return (
        <div> 
            <h2>Input Review</h2>
            <div className="formLogin">
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        placeholder="First name - Hidden"
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />
                     <input
                        type="text"
                        placeholder="Professor"
                        onChange={handleChange}
                        name="Professor"
                        value={formData.Professor}
                    />
                    <input
                        type="text"
                        placeholder="Position"
                        onChange={handleChange}
                        name="position"
                        value={formData.position}
                    />
                    <input
                        type="text"
                        placeholder="Lab"
                        onChange={handleChange}
                        name="lab"
                        value={formData.lab}
                    />
                    <input
                        type="text"
                        placeholder="College"
                        onChange={handleChange}
                        name="college"
                        value={formData.college}
                    />
                    <textarea
                        className="Comment"
                        type="text"
                        placeholder="Comment"
                        onChange={handleChange}
                        name="comment"
                        value={formData.comment}
                    />
                    <p>Rate your Research Program:</p>
                    <Rating
                        className="stars"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        size="large"            
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}