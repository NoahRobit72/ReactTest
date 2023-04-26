import React from 'react';
import { Link } from "react-router-dom"


function LabInfo({ lab }) {
  return (
    <div>
      <hr></hr>
      <div className= "contents">
      <Link to="/LabInformation">Lab Name: {lab.name}</Link>
      <p>Professor: {lab.professor}</p>
      <hr></hr>
      </div>
    </div>
  );
}

export default LabInfo;
