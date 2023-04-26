import React from "react"
import HeaderSchool from "../components/HeaderSchool";
import LabTemplate from "../components/LabTemplate"

// EXAMPLE DATA
const labs = [
    { name: 'Lab A', professor: 'Dr. Smith' },
    { name: 'Lab B', professor: 'Dr. Johnson' },
    { name: 'Lab C', professor: 'Dr. Lee' },
  ];

//
// KFIR CODE
//

// Make a script to query the firebase data base for all the labs at BU

// function "GetLabs(BU)" that returns:
// { name: 'Lab A',  professor: 'Dr. Smith' },
// { name: 'Lab C',  professor: 'Dr. Lee' },

function LabsBU() {
    return (
        <div className="labsBU">
          <div>
            <HeaderSchool/>
            <h1>Boston University</h1>
          </div>
          <div className="Labs">
            {labs.map((lab, index) => (
              <LabTemplate key={index} lab={lab} />
            ))}
          </div>
        </div>
      );
}

export default LabsBU;