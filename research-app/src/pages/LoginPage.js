import React from "react"

export default function LabsBU() {
    const [firstName, setFirstName] = React.useState("")

    console.log(firstName)

    function handleChange(event) {
        setFirstName(event.targer.value);
    }

    return (
    <form>
        <input
            type="text"
            placeholder="First Name"
            onChange = {handleChange}
        />
    </form>
    )
}