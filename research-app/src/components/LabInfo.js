import React from 'react';

function LabInfo({ lab }) {
  return (
    <div>
      <hr></hr>
      <div className= "contents">
      <p>Lab Name: {lab.name}</p>
      <p>Rating: {lab.score}</p>
      <p>Professor: {lab.professor}</p>
      <hr></hr>
      </div>
    </div>
  );
}

export default LabInfo;
