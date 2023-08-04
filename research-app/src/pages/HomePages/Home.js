import Slogan from "../../components/Slogan"
import Header from "../../components/Header"
import Stack from '@mui/material/Stack';
import Footer from "../../components/Footer";
import React, { useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { FSDB } from "../../firebase_setup/firebase";
import { TextField } from "@mui/material";
import "../../css/Home.css";

export default function Home() {
  const [universities, setUniversities] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(false);
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username")

  useEffect(() => {
    async function fetchUniversities() {
      try {
        const universitiesSnapshot = await getDocs(collection(FSDB, "Universities"));
        const universitiesData = universitiesSnapshot.docs.map((doc) => doc.data());
        setUniversities(universitiesData);
      } catch (error) {
        console.error("Error fetching universities: ", error);
      }
    }

    fetchUniversities();
  }, []);

  const handleOptionChange = (event, newValue) => {
    setSelectedOption(newValue);
  };

  useEffect(() => {
    if (selectedOption) {
      navigate(`/labs/${selectedOption.Name}`);
    }
  }, [selectedOption, navigate]);

  return (
    <div className="about-page-container">
      {username && <h1> Hi: {username} </h1>}
      <Header/>
      <Slogan/>
      <Stack className="searchbar" spacing={2} sx={{ width: '80%',display: 'flex', justifyContent: 'center', paddingLeft: '10%', paddingBottom: '100px'}}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={universities}
          getOptionLabel={(option) => (option && option.Name) || ""}
          renderInput={(params) => <TextField {...params} label="Your School" />}
          value={selectedOption}
          onChange={handleOptionChange}
        />
      </Stack>
      <div className="strip">
          <p className="quote1">For Research Students </p>
          <p className="quote2">By Research Students</p>
      </div>
      <Footer/>
    </div>
  );
}
