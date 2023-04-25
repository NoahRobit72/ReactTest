import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LabsBU from "./pages/LabPages/LabsBU"
import LabsMIT from "./pages/LabPages/LabsMIT"
import LabsNU from "./pages/LabPages/LabsNU"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LabsBU" element={<LabsBU />} />
        <Route path="/LabsMIT" element={<LabsMIT />} />
        <Route path="/LabsNU" element={<LabsNU />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App;
