import {collection, query, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FSDB,} from "../../firebase_setup/firebase";
import HeaderSchool from "../../components/HeaderSchool";
import "../../css/LabPages.css";


const collegeName = "Northeastern"

function LabsBU() {
  const [labs, setLabs] = useState([]);

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
        <p>Lab Name: {lab.Name}</p>
        <p>Professor: {lab.Professor}</p>
      </Link>
    </div>
  ));

  return (
    <div className="LabsNU">
      <div>
        <HeaderSchool />
        <h1 className="SchoolHeader">Northeastern University</h1>
      </div>
      {labElements}
    </div>
  );
}

export default LabsBU;
