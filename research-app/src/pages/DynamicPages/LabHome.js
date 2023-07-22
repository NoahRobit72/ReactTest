import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore"; // Import Firestore functions to fetch data
import { FSDB } from "../../firebase_setup/firebase"; // Assuming you have initialized Firestore as FSDB
import "../../css/LabPages.css";

function LabsPage() {
  const { selectedOption } = useParams();
  const [labsData, setLabsData] = useState([]);

  useEffect(() => {
    // Fetch labs data for the selected university from the subcollection "Labs" under the university document
    async function fetchLabsData() {
      try {
        const universityDocRef = doc(FSDB, "Universities", selectedOption);
        const labsSnapshot = await getDocs(collection(universityDocRef, "Labs"));
        const labsData = labsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setLabsData(labsData);
        console.log("Fetched labs data: ", labsData); // Log labsData to check the fetched data
      } catch (error) {
        console.error("Error fetching labs data: ", error);
      }
    }

    if (selectedOption) {
      fetchLabsData();
    }
  }, [selectedOption]);

  return (
    <div className="labs-page-container">
      <h2>{selectedOption ? `${selectedOption} Labs` : "All Labs"}</h2>

      <div className="labs-list">
        {labsData.map((lab) => (
          <div className="lab-item" key={lab.id}>
            <h3>{lab.Name}</h3>
            <p><strong>Lab Field:</strong> {lab.Field}</p> {/* Display Lab Field category */}
            <p><strong>Professor:</strong> {lab.Professor}</p> {/* Display Professor category */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabsPage;
