import React from "react";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase_setup/firebase";

function SchoolSubmission() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        console.log(event.target[0].value);

        setDoc(doc(db, "cities", event.target[0].value), {
        name: event.target[0].value,
        });
    };

  return (
    <div>
    {isSubmitted ? (
      <p>School submitted for review!</p>
    ) : (
        <div>
            <h1>Submit a School</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="School name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )}
  </div>
  );
}

export default SchoolSubmission;



