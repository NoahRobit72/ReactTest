import React from "react";

import "../DynamicPages/ReviewTemplate.css";


function ReviewTemplate(props) {
  return (
	<div className="container">
		<div className="badge">
		{props.rating}
		</div>
		<div className="text">
            <div className="name-date">
				<p><strong>{props.position}</strong></p>
				<p>May 21st</p>
			</div> <p>{props.comment}</p>
		</div>
	</div>
  );
}
export default ReviewTemplate;
