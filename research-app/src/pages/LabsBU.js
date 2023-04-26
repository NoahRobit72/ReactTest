import React from "react"
import HeaderSchool from "../components/HeaderSchool";
import LabInfo from "../components/LabInfo"

// EXAMPLE DATA
const labs = [
    { name: 'Lab A', score: 80, professor: 'Dr. Smith' },
    { name: 'Lab B', score: 90, professor: 'Dr. Johnson' },
    { name: 'Lab C', score: 85, professor: 'Dr. Lee' },
  ];

//
// KFIR CODE
//

// Make a script to query the firebase data base for all the labs at BU

// ie make a function "GetLabs(BU)" that returns:
// { name: 'Lab A', score: 80, professor: 'Dr. Smith' },
// { name: 'Lab B', score: 90, professor: 'Dr. Johnson' },
// { name: 'Lab C', score: 85, professor: 'Dr. Lee' },

function LabsBU() {
    return (
        <div className="labsBU">
          <div>
            <HeaderSchool/>
          </div>
          <div className="Labs">
            {labs.map((lab, index) => (
              <LabInfo key={index} lab={lab} />
            ))}
          </div>
        </div>
      );
}

export default LabsBU;