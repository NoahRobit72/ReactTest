import React from "react"
import { useState } from 'react';
import Rating from '@mui/material/Rating';



export function InputSubmission() {

    const [formData, setFormData] = useState({
        firstName: "",
        position: "",
        lab: "",
        comment: "",
        rating: null,
    })
    
    // const [value, setValue] = useState(0);
    // // const [hover, setHover] = useState(-1);
    
    
    // const useOnChange = (newValue) => {
    //     const onChange = (event, newValue) => {
    //     setValue(newValue);
    //     };
    //     return onChange;
    // };
    
    // const useOnChangeActive = () => {
    //     const onChangeActive = (event, newHover) => {
    //     setHover(newHover);
    //     };
    //     return onChangeActive;
    // };
    
    // const onChange = useOnChange(value);
    // const onChangeActive = useOnChangeActive();


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
                className="Comment"
                type="text"
                placeholder="Comment"
                onChange = {handleChange}
                name="comment"
                value={formData.comment}
            />
            <Rating
                name="rating"
                value={formData.rating}
                onChange={handleChange}
            />
            <br></br>
            <button>Submit</button>
        </form>
    </div>
    </div>
    )
}