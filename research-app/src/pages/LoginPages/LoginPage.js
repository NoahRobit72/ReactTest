import React from "react"
import "../../css/LoginPage.css"


export default function LabsBU() {
    const [formData, setFormData] = React.useState({
        firstName: "", lastName: "", email: "", password: "", password2: ""
    })

    // Parse the inputs and same them to variables 
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    // what actions to take when we submit
    function handleSubmit(event) {
        event.preventDefault();// dont refresh the page
        console.log(formData)
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
                placeholder="LastName"
                onChange = {handleChange}
                name="lastName"
                value={formData.lastName}
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
            <button>Submit</button>
        </form>
    </div>
    )
}