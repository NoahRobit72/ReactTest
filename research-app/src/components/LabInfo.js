import React from 'react';

function LabInfo({ lab }) {
  return (
    <div>
      <hr></hr>
      <p>Lab Name: {lab.name}</p>
      <p>Rating: {lab.score}</p>
      <p>Professor: {lab.professor}</p>
      <hr></hr>
    </div>
  );
}

export default LabInfo;
