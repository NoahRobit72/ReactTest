import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { setDoc, collection, addDoc, doc} from "firebase/firestore";
import { FSDB } from "../../firebase_setup/firebase";
import "../../css/BlankPage.css";

function BlankPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedOption = searchParams.get("selectedOption");

  const [Name, setLabName] = useState("");
  const [Field, setlabField] = useState("");
  const [Professor, setlabProfessor] = useState("");
  const [Position, setPosition] = useState("");
  const [Rating, setRating] = useState("");
  const [Review, setReview] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate required fields
    if (!Name || !Field || !Professor || !Position || !Rating || !Review) {
      alert("Please fill in all required fields.");
      return;
    }
  
    try {
      // Create a new lab document with the Name field as the document ID
      const labRef = doc(FSDB, "Universities", selectedOption, "Labs", Name);
  
      // Set the lab data in the new document
      await setDoc(labRef, {
        Name: Name,
        Field: Field,
        Professor: Professor,
      });
  
      // Add the review data to the Reviews sub-collection under the new lab document
      await addDoc(collection(labRef, "Reviews"), {
        Position: Position,
        Rating: Rating,
        Review: Review,
      });
  
      // Reset form fields after successful submission
      setLabName("");
      setlabField("");
      setlabProfessor("");
      setPosition("");
      setRating("");
      setReview("");
  
      // Navigate back to the LabsPage after submission
      navigate(`/labs/${selectedOption}`);
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };
  
  
  

  return (
    <div className="signup-container">
      <Container maxWidth="sm">
        <Box sx={{ my: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" gutterBottom>
            Review Submission for {selectedOption}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              required
              fullWidth
              label="Lab Name"
              value={Name}
              onChange={(e) => setLabName(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Field"
              value={Field}
              onChange={(e) => setlabField(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Professor"
              value={Professor}
              onChange={(e) => setlabProfessor(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Position"
              value={Position}
              onChange={(e) => setPosition(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Rating"
              type="number"
              value={Rating}
              onChange={(e) => setRating(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Review"
              multiline
              rows={4}
              value={Review}
              onChange={(e) => setReview(e.target.value)}
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit Review
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default BlankPage;




//        const docRef = doc(FSDB, "Universities", selectedOption, "Labs", Name) //Name is going to be set as the document ID
// await addDoc(collection(docRef, "Reviews"), {
//   Position: Position,
//   Rating: Rating,
//   Review: Review,
// });