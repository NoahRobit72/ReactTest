import React from 'react';

function LabInformation({lab}) {
  return (
    <div>
        <h1>This is the list of reviews of the {lab}</h1>
        <div className= "Reviews">
        <p>This is a lab review</p>
        </div>
    </div>
  );
}

export default LabInformation;