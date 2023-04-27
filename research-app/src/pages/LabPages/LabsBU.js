import React from "react"
import { Link } from "react-router-dom"

import HeaderSchool from "../../components/HeaderSchool"
import "../../css/LabPages.css"


// EXAMPLE DATA
const labs = [
    { name: 'Lab A', kind: 'BME' },
    { name: 'Lab B', kind: 'ME' },
    { name: 'Lab C', kind: 'CE' },
  ];

//
// KFIR CODE
//

// Make a script to query the firebase data base for all the labs at BU

// function "GetLabs(BU)" that returns:
// { name: 'Lab A',  professor: 'Dr. Smith' },
// { name: 'Lab C',  professor: 'Dr. Lee' },

function LabsBU() {

  const vanElements = labs.map(lab => (
      <div className="Lab-Blocks">
        <Link className="Linked-Block" to={`/LabsBU/${lab.name}`}>
          <p>Lab Name: {lab.name}</p>
          <p>Kind: {lab.kind}</p>
        </Link>
      </div>
    
))

  return (
      <div className="labsBU">
        <div>
          <HeaderSchool/>
          <h1 className="SchoolHeader">Boston University</h1>
        </div>
        {vanElements}
      </div>
    );
}



export default LabsBU;