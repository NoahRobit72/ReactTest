import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LabInformation from './pages/LabInformation';
import LabsBU from "./pages/LabsBU"
import LabsMIT from "./pages/LabsMIT"
import LabsNU from "./pages/LabsNU"
import LoginPage from "./pages/LoginPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LabsBU" element={<LabsBU />} />
        <Route path="/LabsMIT" element={<LabsMIT />} />
        <Route path="/LabsNU" element={<LabsNU />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/LabInformation" element={<LabInformation />} />




      </Routes>
    </BrowserRouter>
  )
}



export default App;
