import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

function About() {
  return (
    <h1>About page goes here! 🎉</h1>
  )
}

export default App;
