// This page is a template to list the reviews 

import React from 'react';
import { useParams } from "react-router-dom"
import HeaderSchool from '../../components/HeaderSchool';
import "../../css/LabReviews.css";

// EXAMPLE DATA
const reviews = [
  { Position: 'Tech', Rating: 3.2, Review: "mid aliright"},
  { Position: 'Software Researcher', Rating: 3.3, Review: "I have academia"},
  { Position: 'Student Coffee Runner', Rating: 4.3, Review: "Not great"},
];



function LabReviews() {
  const params = useParams()
  console.log(params)

  // Kfir put your code here to query for a json file of reviews

  // Function GetReviews(params.id)

  // Returns json file of reviews


  const LabReviews = reviews.map(review => (
    <div className="reviews-tile">
      <p>Position: {review.Position}</p>
      <p>Rating: {review.Rating}</p>
      <p>Review: {review.Review}</p>
    </div>
    ))
  

  return (
    <div>
        <HeaderSchool/>
        <h1 className='LabHeader'>{params.id}</h1>
        {LabReviews}
    </div>
  );
}

export default LabReviews;


