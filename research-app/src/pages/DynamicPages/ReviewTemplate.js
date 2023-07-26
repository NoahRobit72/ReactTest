import React from "react";

import "../DynamicPages/ReviewTemplate.css";

// This is the template for each review
function ReviewTemplate(props) {
  return (
	<div className="container">
		<div className="badge" style={{ backgroundColor: props.badgeColor }}>
		{props.rating}
		</div>
		<div className="text">
            <div className="name-date">
				<p><strong>Position: </strong>{props.position}</p>
			</div> <p><strong>Review: </strong>{props.comment}</p>
		</div>
	</div>
  );
}
export default ReviewTemplate;
