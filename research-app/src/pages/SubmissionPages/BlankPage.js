import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { getDocs, collection, addDoc} from "firebase/firestore";
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
      // Check if the lab already exists under the selectedOption
      const labRef = collection(FSDB, "Universities", selectedOption, "Labs");
      const querySnapshot = await getDocs(labRef);
      const existingLab = querySnapshot.docs.find((doc) => doc.data().Name === Name);

      if (existingLab) {
        // If the lab exists, get its ID
        const labId = existingLab.id;

        // Add the review data to the Reviews sub-collection under the existing lab document
        await addDoc(collection(FSDB, "Universities", selectedOption, "Labs", labId, "Reviews"), {
          Position: Position,
          Rating: Rating,
          Review: Review,
        });
      } else {
        // If the lab does not exist, create a new lab document with the provided fields
        const newLabData = {
          Name: Name,
          Field: Field,
          Professor: Professor,
        };

        const newLabRef = await addDoc(collection(FSDB, "Universities", selectedOption, "Labs"), newLabData);

        // Add the review data to the Reviews sub-collection under the new lab document
        await addDoc(collection(newLabRef, "Reviews"), {
          Position: Position,
          Rating: Rating,
          Review: Review,
        });
      }

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