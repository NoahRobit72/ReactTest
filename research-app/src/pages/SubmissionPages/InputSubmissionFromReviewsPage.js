import React from "react";
import { useParams } from "react-router-dom";

function InputSubmissionFromReviewsPage() {
  const { labId } = useParams();

  return (
    <div>
      <h1>Add Review for: {labId}</h1>
      {/* Implement the rest of the review submission form or content here */}
      
    </div>
  );
}

export default InputSubmissionFromReviewsPage;
