import { useParams} from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { collection, addDoc, doc } from "firebase/firestore";
import { FSDB } from "../../firebase_setup/firebase";

function InputSubmissionFromReviewsPage() { // Receive selectedOption as a prop
    const { labId, collegeName } = useParams(); // Access collegeName from the URL parameters
  // const selectedOption = searchParams.get("selectedOption"); // No need to get it from URL anymore

  const [Position, setPosition] = useState("");
  const [Rating, setRating] = useState("");
  const [Review, setReview] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!Position || !Rating || !Review) {
      alert("Please fill in all required fields.");
      return;
    }
    const labRef = doc(FSDB, "Universities", collegeName, "Labs", labId);

    try {
      // Create a new lab document with the Name field as the document ID

      // Set the lab data in the new document

      // Add the review data to the Reviews sub-collection under the new lab document
      await addDoc(collection(labRef, "Reviews"), {
        Position: Position,
        Rating: Rating,
        Review: Review,
      });

      // Reset form fields after successful submission
      setPosition("");
      setRating("");
      setReview("");

      // Navigate back to the LabsPage after submission
      navigate(`/labs/${collegeName}`);
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  return (
    <div className="signup-container">
      <Container maxWidth="sm">
        <Box sx={{ my: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" gutterBottom>
            Review Submission for {labId}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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

export default InputSubmissionFromReviewsPage;
