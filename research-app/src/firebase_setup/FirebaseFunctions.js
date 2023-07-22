/*
import React, { useEffect, useState } from "react";
import {db, FSDB} from "../firebase_setup/firebase.js"
import { collection, getDocs } from "firebase/firestore";






export function SchoolList() {
  const [universityList, setUniversityList] = useState([]);

  useEffect(() => {
    const getUniversityList = async () => {
      try {
        const universitiesCollectionRef = collection(FSDB, "Universities");
        const data = await getDocs(universitiesCollectionRef);
        // Process the data and update the university list
        setUniversityList(data);
      } catch (err) {
        console.error(err);
      }
    };

    getUniversityList();
  }, []);

  // Render the school list component
  return (
    <div>
      {universityList.map((university) => (
        <div key={university.id}>{university.name}</div>
      ))}
    </div>
  );
}

export default SchoolList;
*/