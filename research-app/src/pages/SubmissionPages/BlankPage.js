import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { doc, collection, addDoc } from "firebase/firestore";
import { FSDB } from "../../firebase_setup/firebase";
import "../../css/BlankPage.css";



function BlankPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedOption = searchParams.get("selectedOption");
  const labId = searchParams.get("labId");

  const [labName, setLabName] = useState("");
  const [labField, setlabField] = useState("");
  const [labProfessor, setlabProfessor] = useState("");
  const [position, setPosition] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new review document in the Reviews sub-collection under the Lab document
    const reviewData = {
      Position: position,
      Rating: rating,
      Review: review,
    };

    try {
      // Add the review data to the Reviews sub-collection
      await addDoc(collection(FSDB, "Universities", selectedOption, "Labs", labId, "Reviews"), reviewData);

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
              value={labName}
              onChange={(e) => setLabName(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Field"
              value={labField}
              onChange={(e) => setlabField(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Professor"
              value={labProfessor}
              onChange={(e) => setlabProfessor(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Rating"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Review"
              multiline
              rows={4}
              value={review}
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
