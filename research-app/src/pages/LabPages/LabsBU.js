import React, { useEffect, useState } from "react";
import HeaderSchool from "../../components/HeaderSchool";
import { db } from "../../firebase_setup/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

import "../../css/LabPages.css";


// This page is for displaying all the labs for a specific school
function LabsBU() {
  const [schools, getSchools] = useState([]);
  useEffect(() => {
    // Get all the schools from the database
    const getSchoolsFromFirebase = async () => {
      try{
        const data = await getDocs(collection(db, "Universities"));
        const perciseData = data.docs.map((doc) => ({id: doc.id}));
        getSchools(perciseData);
        console.log("Schools:", perciseData); // Print the schools data
      }catch(error){
        console.log("Error getting documents: ", error); 
      };
    }
    getSchoolsFromFirebase()

    const getNumLabsPerSchool = async () => {
      try{
        // const data = await getDocs(collection(db, "/Universities/Boston University/Labs"));
        // const perciseData = data.docs.map((doc) => ({id: doc.id}));
        // getSchools(perciseData);
        // console.log("Data:", perciseData); // Print the schools data


        const docRef = doc(db, "Universities", "Boston University", "Labs", "Lab A");
        const docSnap = await getDoc(docRef);
        const labData = { id: docSnap.id, ...docSnap.data() };
        console.log("Lab Data:", labData);
      }catch(error){
        console.log("Error getting documents: ", error); 
      };
    }
    getNumLabsPerSchool()


    const getAttributes = async (selectedLab) => {
      try{
        var docRef = "/Universities/Boston University/Labs/Lab A/Reviews/" + selectedLab;
        // var docRef = "/Universities/Boston University/Labs/Lab A/Reviews/2"
        const docSnap = await getDoc(doc(db, docRef));
        const data = docSnap.data();
        
        const attributes = {
          date: data.Date,
          facilities: data["Facilities and resources"],
          mentorshipQuality: data["Mentorship quality"],
          review: data.Review
        };
        console.log("Attributes:", attributes); // Print the schools data
      }catch(error){
        console.log("Error getting documents: ", error); 
      };
    }
    getAttributes(2)
  
  }, []);

  const schoolElements = schools.map((school) => (
    <li key={school.id}>{school.id}</li>
  ));

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
            <tbody>
              <tr>
                <td>Mentorship quality</td>
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
            </tbody>
            </table> 
          </div>
        </div>

        <h3 className="Reviews">3 Reviews</h3>
        {/* Print all of the schools */}
        {/* {labElements} */}
        {schoolElements}
        </div>
      </div>
  );
}

export default LabsBU;
