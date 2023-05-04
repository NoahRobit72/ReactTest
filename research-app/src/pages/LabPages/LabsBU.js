import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";
import HeaderSchool from "../../components/HeaderSchool";
import "../../css/LabPages.css";

function LabsBU() {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    const fetchLabs = async () => {
      const labCollection = collection(firestore, "boston university ");
      const labSnapshot = await getDocs(labCollection);
      const labList = labSnapshot.docs.map((doc) => doc.data());
      setLabs(labList);
    };
    fetchLabs();
  }, []);

  const labElements = labs.map((lab) => (
    <div className="Lab-Blocks" key={lab.id}>
      <Link className="Linked-Block" to={`/LabsBU/${lab.id}`}>
        <p>Lab Name: {lab.Name}</p>
        <p>Type: {lab.Type}</p>
      </Link>
    </div>
  ));

  return (
    <div className="labsBU">
      <div>
        <HeaderSchool />
        <h1 className="SchoolHeader">Boston University</h1>
      </div>
      {labElements}
    </div>
  );
}

export default LabsBU;
