import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access the query parameters

function BlankPage() {
  const location = useLocation(); // Use useLocation hook to access the query parameters
  const searchParams = new URLSearchParams(location.search);
  const selectedOption = searchParams.get("selectedOption");

  return (
    <div className="signup-container">
      <h1>This is a signup page {selectedOption}</h1>
    </div>
  );
}

export default BlankPage;
