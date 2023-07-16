import {collection, query, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FSDB,} from "../../firebase_setup/firebase";
import HeaderSchool from "../../components/HeaderSchool";
import "../../css/LabPages.css";

// This page is for displaying all the labs for a specific school
function LabsBU() {
  const [labs, setLabs] = useState([]);
  const collegeName = "boston university"

  useEffect(() => {
    const q = query(collection(FSDB, collegeName));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const labs = [];
      querySnapshot.forEach((doc) => {
        labs.push({ id: doc.id, ...doc.data() });
      });
      setLabs(labs);
    });
    return unsubscribe;
  }, []);

  const labElements = labs.map((lab) => (
    <div className="Lab-Blocks" key={lab.id}>
    <Link className="Linked-Block" to={`/LabsBU/${collegeName}/${lab.id}`}>
        <p className="BlockContents">Lab Name: {lab.Name}</p>
        <p className="BlockContents">Professor: {lab.Professor}</p>
      </Link>
    </div>
  ));

  const attributeTab = (attributes) => {
    return (
      <div className="Attributes">{attributes}</div>
    );
  };

  return (
    <div className="labsBU">
      <div>
        <HeaderSchool />
        <div className="flexBox">
          <div className="box box-1">
            <h1 className="SchoolHeader">Boston University</h1>
            <div className="centered-contents">
              <h2 className="Rating" >3.9</h2>
              <h2 className="UnderRating">Overall Quality</h2>
            </div>
          </div>
          <div className="box box-2">
            <table className="AttributesTable">
              <tr>
                <td>{attributeTab("Mentorship quality")}</td>
                <td>Facilities and resources</td>
              </tr>
              <tr>
                <td>Publication and presentation opportunities</td>
                <td>Funding and financial support</td>
              </tr>
              <tr>
                <td>Clear communication channels</td>
                <td>Opportunities for independent research</td>
              </tr>
            </table> 
          </div>
        </div>

        <h3 className="Reviews">3 Reviews</h3>
        {/* Print all of the schools */}
        {labElements}
        </div>
      </div>
  );
}

export default LabsBU;
