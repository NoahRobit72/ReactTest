import React from "react"
import { useParams } from "react-router-dom"
import HeaderLoggedIn from "../../components/HeaderLoggedIn"
import Slogan from "../../components/Slogan"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";

import { useEffect } from 'react';
import "../../css/Home.css"


// This is the home page for a logged in User  
export default function HomeLoggedIn() {
    const params = useParams()
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
        <HeaderLoggedIn name = {params.id} />
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
        {/* <div className="button-div">
            <Link className="link-button" to="/LabsBU">BU</Link>
            <Link className="link-button" to="/LabsMIT">MIT</Link>
            <Link className="link-button" to="/LabsNU">NU</Link>    
        </div> */}
    </div>
    )
  }