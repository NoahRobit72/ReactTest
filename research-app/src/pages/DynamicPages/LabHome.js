// LabsPage.js
import React from "react";
import { useParams } from "react-router-dom";
import  "../../css/LabPages.css"

function LabsPage() {
  const { selectedOption } = useParams();

  // Sample data for labs based on the selected option
  const labsData = [
    { id: 1, name: "Lab A", description: "This is Lab A description." },
    { id: 2, name: "Lab B", description: "This is Lab B description." },
    { id: 3, name: "Lab C", description: "This is Lab C description." },
    // Add more labs data as needed
  ];

  return (
    <div className="labs-page-container">
      <h2>{selectedOption ? `${selectedOption} Labs` : "All Labs"}</h2>

      <div className="labs-list">
        {labsData.map((lab) => (
          <div className="lab-item" key={lab.id}>
            <h3>{lab.name}</h3>
            <p>{lab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabsPage;
