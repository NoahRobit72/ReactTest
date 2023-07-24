import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link to use for navigation
import { collection, doc, getDocs, } from "firebase/firestore"; // Import Firestore functions to fetch data
import { FSDB } from "../../firebase_setup/firebase"; // Assuming you have initialized Firestore as FSDB
import "../../css/LabPages.css";
import HeaderLab from "../../components/HeaderLab";

function LabsPage() {
  const { selectedOption } = useParams();
  const [labsData, setLabsData] = useState([]);

  useEffect(() => {
    // Fetch labs data for the selected university from the subcollection "Labs" under the university document
    async function fetchLabsData() {
      try {
        const universityDocRef = doc(FSDB, "Universities", selectedOption);
        console.log("Fetching labs data for:", selectedOption); // Log the selected university
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
  }, [selectedOption]
  );

  const labElements = labsData.map((lab) => (
    <div className="lab-item" key={lab.id}>
    <Link className="Linked-Block" to={`/labs/${selectedOption}/${lab.id}`}>
      <h3>{lab.Name}</h3>
      <p><strong>Lab Field:</strong> {lab.Field}</p> {/* Display Lab Field category */}
      <p><strong>Professor:</strong> {lab.Professor}</p> {/* Display Professor category */}
    </Link>
    </div>
  ))

  return (
    <div>
      <HeaderLab />
        <div className="labs-page-container">
          <h2>{selectedOption ? `${selectedOption} Labs` : "All Labs"}</h2>
          <div className="labs-list">
            {labElements}
          </div>
        </div>
    </div>
  );
}

export default LabsPage;
