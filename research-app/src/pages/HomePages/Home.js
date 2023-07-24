import Slogan from "../../components/Slogan"
import Header from "../../components/Header"
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from "react";
import { Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { FSDB } from "../../firebase_setup/firebase";
import { TextField } from "@mui/material";
import "../../css/Home.css";

export default function Home() {
  const [universities, setUniversities] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

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
        <Header/>
        <Slogan/>
        <Stack className="searchbar" spacing={2} sx={{ width: '80%',display: 'flex', justifyContent: 'center', paddingLeft: '10%'}}>
      {/* ... (Header and Slogan components) */}
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
      <div className="strip"></div>
    </div>
  );
}
