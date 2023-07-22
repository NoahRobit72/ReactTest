import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/HomePages/Home"
import LabReviews from './pages/DynamicPages/LabReviews';
// import LabReviewsTest from "./pages/DynamicPages/LabReviewsTest"
import LabsBU from "./pages/LabPages/LabsBU"
import LabsMIT from "./pages/LabPages/LabsMIT"
import LabsNU from './pages/LabPages/LabsNU';
import { LoginPage } from './pages/SubmissionPages/LoginPage';
import HomeLoggedIn from './pages/HomePages/HomeLoggedIn';
import { InputSubmission } from './pages/SubmissionPages/InputSubmission';
import { SignupPage } from './pages/SubmissionPages/SignupPage';
import LabsPage from "./pages/DynamicPages/LabHome";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HomeLoggedIn/>} />
        <Route path="/labs/:selectedOption" element={<LabsPage />} />
        {/* <Route path="/LabsBU" element={<LabsBU />} />
        <Route path="/LabsMIT" element={<LabsMIT />} />
        <Route path="/LabsNU" element={<LabsNU />} /> */}
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/LabsBU/:collegeName/:labId" element={<LabReviews />} />
        <Route path="/LabsBU/:id" element={<LabReviews/>} /> 
        {/* <Route path="/LabsBU/:id" element={<LabReviewsTest/>} />  */}
        <Route path="/ReviewInput/:id" element={<InputSubmission/>} />
        <Route path="/signup" element={<SignupPage/>} />
        
      </Routes>
    </BrowserRouter>
  )
}



export default App;