import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase_setup/firebase";
import "../../css/SchoolSubmission.css"; // Assuming you have a CSS file for styling
import { useNavigate } from "react-router-dom";


function SchoolSubmission() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    const schoolName = event.target[0].value;

    try {
      // Save school data to Firestore
      await setDoc(doc(db, "Universities", schoolName), {
        Name: schoolName,
      });

      // Navigate back to the Home page after successful submission
      navigate("/");
    } catch (error) {
      console.error("Error submitting school: ", error);
    }
  };

  return (
    <div className="submission-container">
      {isSubmitted ? (
        <p className="submission-message">School submitted for review!</p>
      ) : (
        <div className="submission-form">
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
