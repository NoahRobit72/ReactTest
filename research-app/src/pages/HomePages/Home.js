import React from "react"
import Header from "../../components/Header"
//import Footer from "../../components/Footer"
import Slogan from "../../components/Slogan"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";
// import {addReview} from "../../firebase_setup/firebase" commeed out for now, use for testing
//import {writeUserData} from "../../firebase_setup/firebase"
import { useEffect } from 'react';
import "../../css/Home.css"

// This is the home page
export default function Home() {
    const top5Songs = [
        { label: 'Boston University'},
        { label: 'Northeastern'},
        { label: 'MIT'},
    ];

    const navigate = useNavigate(false);
    const [value, setValue] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');

    useEffect(() => {
        if(value.label !== ''){
            switch (value.label) {
                case "Boston University":
                    navigate("/LabsBU");
                    break;
                case "MIT":
                    navigate("/LabsMIT");
                    break;
                case "Northeastern":
                    navigate("/LabsNU");
                    break;
                default:
                    break
              }
        }
      }, [value,navigate]);

    return (
    <div className="about-page-container">
        <Header/>
        <Slogan/>
        <Stack className="searchbar" spacing={2} sx={{ width: '80%',display: 'flex', justifyContent: 'center', paddingLeft: '10%'}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top5Songs}
                renderInput={(params) => <TextField {...params} label="Your School" />}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
            />
        </Stack>
        <div className="strip">

        </div>
    </div>
    )
  }